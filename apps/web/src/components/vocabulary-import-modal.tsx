import React, { useState } from 'react';
import { Upload, FileText, Check, AlertCircle, X, Sparkles, Layers } from 'lucide-react';
import { Button, Modal } from './ui';
import { api, post } from '../services/api';
import { useQueryClient } from '@tanstack/react-query';
import { useUI } from '../stores/ui';
import { parsePptxBuffer } from '../services/client-pptx-parser';
import { extractTextLinesFromPdf, parsePdfTextLines } from '../services/client-pdf-parser';

export interface ParsedCardItem {
  term: string;
  reading: string;
  cleanReading?: string;
  pitchAccent?: string;
  sinoVietnamese?: string;
  meaning: string;
  note?: string;
  example?: string;
}

export interface ParsedDeckGroup {
  deckName: string;
  cards: ParsedCardItem[];
  skippedSlidesCount?: number;
  totalSlidesCount?: number;
}

interface VocabularyImportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  targetDeckId?: string;
  targetDeckName?: string;
}

export function VocabularyImportModal({
  open,
  onOpenChange,
  targetDeckId,
  targetDeckName,
}: VocabularyImportModalProps) {
  const [fileType, setFileType] = useState<'pptx' | 'pdf'>('pptx');
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedDecks, setParsedDecks] = useState<ParsedDeckGroup[]>([]);
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [isCommitting, setIsCommitting] = useState(false);

  const client = useQueryClient();
  const notify = useUI((s) => s.notify);

  const resetState = () => {
    setParsedDecks([]);
    setActiveDeckIndex(0);
    setIsProcessing(false);
    setIsCommitting(false);
  };

  const handleClose = (nextOpen: boolean) => {
    if (!nextOpen) {
      resetState();
    }
    onOpenChange(nextOpen);
  };

  // Upload and parse PPTX files (instant client-side parsing + server fallback)
  const handlePptxUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setIsProcessing(true);

    try {
      // 1. TỐI ƯU SIÊU TỐC: Phân tích trực tiếp trên client (0ms network delay, tức thì)
      const clientResults: ParsedDeckGroup[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const arrayBuffer = await file.arrayBuffer();
        const parsed = await parsePptxBuffer(arrayBuffer, file.name);
        clientResults.push(parsed);
      }

      const totalCards = clientResults.reduce((acc, r) => acc + r.cards.length, 0);
      setParsedDecks(clientResults);
      setActiveDeckIndex(0);
      notify(`Đã quét siêu tốc thành công ${totalCards} từ vựng từ ${clientResults.length} tệp bài giảng.`);
    } catch (clientErr) {
      console.warn('Client-side PPTX parsing failed, falling back to server API...', clientErr);

      // 2. Dự phòng: Gửi lên máy chủ nếu trình duyệt gặp lỗi
      const form = new FormData();
      for (let i = 0; i < files.length; i++) {
        form.append('files', files[i]);
      }

      try {
        const res = await api<{
          results: ParsedDeckGroup[];
          totalDecks: number;
          totalCards: number;
          message: string;
        }>('/flashcards/pptx/preview', {
          method: 'POST',
          body: form,
        });

        setParsedDecks(res.results);
        setActiveDeckIndex(0);
        notify(res.message);
      } catch (err) {
        notify((err as Error).message);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Upload and parse PDF file (instant client-side extraction + server fallback)
  const handlePdfUpload = async (file: File | null) => {
    if (!file) return;
    setIsProcessing(true);

    try {
      // 1. TỐI ƯU SIÊU TỐC TRÊN CLIENT: Trích xuất trực tiếp bằng pdfjs
      const arrayBuffer = await file.arrayBuffer();
      const lines = await extractTextLinesFromPdf(arrayBuffer);
      const parsed = parsePdfTextLines(lines, file.name);

      if (parsed.cards && parsed.cards.length > 0) {
        setParsedDecks([
          {
            deckName: targetDeckName || parsed.deckName,
            cards: parsed.cards,
            totalSlidesCount: parsed.cards.length,
          },
        ]);
        setActiveDeckIndex(0);
        notify(`Đã quét siêu tốc thành công ${parsed.cards.length} từ vựng từ tệp PDF.`);
        return;
      }
      console.warn('Client-side PDF parsed 0 structured cards, trying server fallback...');
    } catch (clientErr) {
      console.warn('Client-side PDF parsing error, falling back to server API...', clientErr);
    }

    // 2. Dự phòng: Gửi lên máy chủ nếu client không bóc tách được
    const form = new FormData();
    form.append('file', file);

    try {
      const res = await api<{
        deckName: string;
        cards: ParsedCardItem[];
        message: string;
      }>('/flashcards/pdf', {
        method: 'POST',
        body: form,
      });

      if (res.cards && res.cards.length > 0) {
        setParsedDecks([
          {
            deckName: targetDeckName || res.deckName,
            cards: res.cards,
            totalSlidesCount: res.cards.length,
          },
        ]);
        setActiveDeckIndex(0);
        notify(res.message);
      } else {
        notify('Không tìm thấy từ vựng nào có cấu trúc hợp lệ trong tệp PDF.');
      }
    } catch (err) {
      notify((err as Error).message);
    } finally {
      setIsProcessing(false);
    }
  };

  // Remove a card from preview table
  const handleRemoveCard = (deckIdx: number, cardIdx: number) => {
    setParsedDecks((prev) => {
      const clone = [...prev];
      const targetGroup = { ...clone[deckIdx] };
      targetGroup.cards = targetGroup.cards.filter((_, i) => i !== cardIdx);
      clone[deckIdx] = targetGroup;
      return clone;
    });
  };

  // Edit card inline
  const handleUpdateCard = (
    deckIdx: number,
    cardIdx: number,
    field: keyof ParsedCardItem,
    val: string
  ) => {
    setParsedDecks((prev) => {
      const clone = [...prev];
      const targetGroup = { ...clone[deckIdx] };
      const cards = [...targetGroup.cards];
      cards[cardIdx] = { ...cards[cardIdx], [field]: val };
      targetGroup.cards = cards;
      clone[deckIdx] = targetGroup;
      return clone;
    });
  };

  // Commit and create flashcards in database
  const handleCommit = async () => {
    const totalCards = parsedDecks.reduce((sum, d) => sum + d.cards.length, 0);
    if (totalCards === 0) {
      notify('Không có thẻ nào để lưu.');
      return;
    }

    setIsCommitting(true);
    try {
      const res = await post<{ ok: boolean; totalCardsCreated: number; message: string }>(
        '/flashcards/import/commit',
        {
          targetDeckId,
          decks: parsedDecks,
        }
      );

      void client.invalidateQueries({ queryKey: ['decks'] });
      void client.invalidateQueries({ queryKey: ['deck'] });
      void client.invalidateQueries({ queryKey: ['dashboard'] });

      notify(res.message);
      handleClose(false);
    } catch (err) {
      notify((err as Error).message);
    } finally {
      setIsCommitting(false);
    }
  };

  const totalExtractedCards = parsedDecks.reduce((sum, d) => sum + d.cards.length, 0);
  const currentDeck = parsedDecks[activeDeckIndex];

  return (
    <Modal
      open={open}
      onOpenChange={handleClose}
      title="Nhập Flashcard thông minh (PowerPoint / PDF)"
    >
      <div className="import-modal-content">
        {parsedDecks.length === 0 ? (
          <div className="import-dropzone-section">
            <div className="import-type-selector">
              <button
                type="button"
                className={`button ${fileType === 'pptx' ? 'primary' : 'secondary'}`}
                onClick={() => setFileType('pptx')}
              >
                <Layers size={16} />
                Slide PowerPoint (.pptx)
              </button>
              <button
                type="button"
                className={`button ${fileType === 'pdf' ? 'primary' : 'secondary'}`}
                onClick={() => setFileType('pdf')}
              >
                <FileText size={16} />
                Tài liệu PDF (.pdf)
              </button>
            </div>

            <div className="import-instructions">
              {fileType === 'pptx' ? (
                <>
                  <p>
                    <strong>Tự động quét & bóc tách tuyệt đối:</strong> Hỗ trợ tải một hoặc nhiều file
                    bài giảng PowerPoint (Minna no Nihongo, v.v.).
                  </p>
                  <ul>
                    <li>Tự động bỏ qua slide tiêu đề bài học và slide giải thích phát âm.</li>
                    <li>
                      Tự động trích xuất: Chữ Hán, Cách đọc Hiragana/Katakana chuẩn, Ký hiệu trọng âm,
                      Âm Hán Việt và Nghĩa tiếng Việt.
                    </li>
                    <li>Sắp xếp chính xác theo số thứ tự Slide bài giảng.</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>
                    <strong>Tự động hóa hoàn toàn từ PDF:</strong> Quét các dòng từ vựng có cấu trúc
                    hoặc tự động tra cứu từ điển để điền cách đọc và nghĩa tiếng Việt mà không cần nhập
                    thủ công.
                  </p>
                </>
              )}
            </div>

            <label className="import-drop-box">
              <Upload size={36} className="upload-icon" />
              <div className="drop-title">
                {isProcessing
                  ? 'Đang phân tích và bóc tách dữ liệu...'
                  : fileType === 'pptx'
                    ? 'Chọn hoặc kéo thả một hoặc nhiều file .pptx'
                    : 'Chọn hoặc kéo thả file .pdf'}
              </div>
              <span className="drop-hint">
                {fileType === 'pptx'
                  ? 'Hỗ trợ chọn nhiều file bài giảng cùng lúc (tối đa 20 file)'
                  : 'Hệ thống tự động nhận diện từ vựng, âm Hán Việt và tra cứu nghĩa'}
              </span>
              <input
                type="file"
                disabled={isProcessing}
                multiple={fileType === 'pptx'}
                accept={
                  fileType === 'pptx'
                    ? '.pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation'
                    : 'application/pdf'
                }
                onChange={(e) => {
                  if (fileType === 'pptx') {
                    void handlePptxUpload(e.target.files);
                  } else {
                    void handlePdfUpload(e.target.files?.[0] || null);
                  }
                  e.target.value = '';
                }}
              />
            </label>
          </div>
        ) : (
          <div className="import-preview-section">
            <div className="preview-header-bar">
              <div>
                <span className="eyebrow">KẾT QUẢ QUÉT BÓC TÁCH</span>
                <h3>
                  Tổng cộng: {totalExtractedCards} từ vựng ({parsedDecks.length} bộ thẻ)
                </h3>
              </div>
              <div className="preview-actions">
                <Button variant="secondary" onClick={resetState}>
                  Chọn file khác
                </Button>
                <Button
                  variant="primary"
                  disabled={isCommitting || totalExtractedCards === 0}
                  onClick={() => void handleCommit()}
                >
                  <Sparkles size={16} />
                  {isCommitting
                    ? 'Đang lưu...'
                    : targetDeckId
                      ? `Lưu ${totalExtractedCards} từ vào bộ hiện tại`
                      : `Tạo ${parsedDecks.length} bộ Flashcard`}
                </Button>
              </div>
            </div>

            {parsedDecks.length > 1 && (
              <div className="import-deck-tabs">
                {parsedDecks.map((d, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`deck-tab-item ${activeDeckIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveDeckIndex(idx)}
                  >
                    <span>{d.deckName}</span>
                    <span className="count-badge">{d.cards.length}</span>
                  </button>
                ))}
              </div>
            )}

            {currentDeck && (
              <div className="preview-deck-container">
                <div className="deck-title-edit">
                  <label>
                    Tên bộ thẻ:
                    <input
                      type="text"
                      value={currentDeck.deckName}
                      onChange={(e) => {
                        const newName = e.target.value;
                        setParsedDecks((prev) => {
                          const clone = [...prev];
                          clone[activeDeckIndex] = { ...clone[activeDeckIndex], deckName: newName };
                          return clone;
                        });
                      }}
                    />
                  </label>
                </div>

                <div className="import-table-wrapper">
                  <table className="import-preview-table">
                    <thead>
                      <tr>
                        <th style={{ width: '48px' }}>STT</th>
                        <th style={{ width: '180px' }}>Từ vựng (Term)</th>
                        <th style={{ width: '180px' }}>Cách đọc (Reading)</th>
                        <th style={{ width: '140px' }}>Âm Hán Việt</th>
                        <th>Nghĩa tiếng Việt</th>
                        <th style={{ width: '40px' }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentDeck.cards.map((card, cIdx) => (
                        <tr key={cIdx}>
                          <td className="center-cell muted">{cIdx + 1}</td>
                          <td>
                            <input
                              className="table-input bold"
                              value={card.term}
                              onChange={(e) =>
                                handleUpdateCard(activeDeckIndex, cIdx, 'term', e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="table-input"
                              value={card.cleanReading || card.reading}
                              onChange={(e) =>
                                handleUpdateCard(
                                  activeDeckIndex,
                                  cIdx,
                                  'cleanReading',
                                  e.target.value
                                )
                              }
                            />
                            {card.pitchAccent && card.pitchAccent !== card.cleanReading && (
                              <small className="pitch-tag" title="Trọng âm gốc">
                                {card.pitchAccent}
                              </small>
                            )}
                          </td>
                          <td>
                            <input
                              className="table-input sino-input"
                              placeholder="[HÁN VIỆT]"
                              value={card.sinoVietnamese || ''}
                              onChange={(e) =>
                                handleUpdateCard(
                                  activeDeckIndex,
                                  cIdx,
                                  'sinoVietnamese',
                                  e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="table-input"
                              value={card.meaning}
                              onChange={(e) =>
                                handleUpdateCard(activeDeckIndex, cIdx, 'meaning', e.target.value)
                              }
                            />
                          </td>
                          <td className="center-cell">
                            <button
                              type="button"
                              className="action-icon-button delete"
                              title="Xóa dòng này"
                              onClick={() => handleRemoveCard(activeDeckIndex, cIdx)}
                            >
                              <X size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
