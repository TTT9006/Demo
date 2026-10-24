import { useState, useMemo, useEffect } from 'react';
import { Search, Check, Layers, Square, CheckSquare } from 'lucide-react';
import { Modal, Button } from './ui';
import type { Deck } from '../types';

export interface DeckSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  decks: Deck[];
  selectedDeckIds: string[];
  onConfirm: (selectedIds: string[]) => void;
  title?: string;
}

export function DeckSelectionModal({
  open,
  onOpenChange,
  decks,
  selectedDeckIds,
  onConfirm,
  title = 'Chọn các bộ thẻ ôn tập tự do',
}: DeckSelectionModalProps) {
  const [tempSelected, setTempSelected] = useState<Set<string>>(() => {
    return new Set(selectedDeckIds.length > 0 ? selectedDeckIds : decks.map((d) => d.id));
  });
  const [search, setSearch] = useState('');

  // Sync tempSelected whenever the modal opens or selectedDeckIds changes
  useEffect(() => {
    if (open) {
      setTempSelected(
        new Set(selectedDeckIds.length > 0 ? selectedDeckIds : decks.map((d) => d.id)),
      );
      setSearch('');
    }
  }, [open, selectedDeckIds, decks]);

  const filteredDecks = useMemo(() => {
    if (!search.trim()) return decks;
    const q = search.trim().toLowerCase();
    return decks.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        (d.description && d.description.toLowerCase().includes(q)),
    );
  }, [decks, search]);

  const totalSelectedCards = useMemo(() => {
    return decks
      .filter((d) => tempSelected.has(d.id))
      .reduce((sum, d) => sum + (d.cards?.length || 0), 0);
  }, [decks, tempSelected]);

  const toggleDeck = (id: string) => {
    setTempSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const selectAll = () => {
    setTempSelected(new Set(decks.map((d) => d.id)));
  };

  const deselectAll = () => {
    setTempSelected(new Set());
  };

  const handleConfirm = () => {
    if (tempSelected.size === 0) return;
    onConfirm(Array.from(tempSelected));
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title={title}>
      <div className="deck-select-modal-container">
        <p className="deck-select-subtitle">
          Chọn một hoặc nhiều bộ thẻ để ôn tập cùng lúc. Hệ thống sẽ xáo trộn ngẫu nhiên các từ từ các
          bộ đã chọn.
        </p>

        <div className="deck-select-toolbar">
          <div className="input-icon deck-select-search">
            <Search size={16} aria-hidden="true" />
            <input
              type="text"
              placeholder="Tìm bộ thẻ…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Tìm kiếm bộ thẻ trong danh sách"
            />
          </div>
          <div className="inline-actions" style={{ gap: '6px' }}>
            <Button
              type="button"
              variant="ghost"
              size="small"
              onClick={selectAll}
              title="Chọn tất cả các bộ thẻ"
            >
              Chọn tất cả
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="small"
              onClick={deselectAll}
              title="Bỏ chọn tất cả"
            >
              Bỏ chọn
            </Button>
          </div>
        </div>

        <div className="deck-select-list" role="group" aria-label="Danh sách bộ thẻ">
          {filteredDecks.length > 0 ? (
            filteredDecks.map((deck) => {
              const isChecked = tempSelected.has(deck.id);
              const cardCount = deck.cards?.length || 0;
              return (
                <div
                  key={deck.id}
                  className={`deck-select-item ${isChecked ? 'selected' : ''}`}
                  onClick={() => toggleDeck(deck.id)}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      toggleDeck(deck.id);
                    }
                  }}
                >
                  <div className="deck-select-checkbox-wrap" aria-hidden="true">
                    {isChecked ? (
                      <CheckSquare size={18} className="deck-select-checkbox-checked" />
                    ) : (
                      <Square size={18} className="deck-select-checkbox-empty" />
                    )}
                  </div>
                  <div className="deck-select-item-content">
                    <div className="deck-select-item-title-row">
                      <strong className="deck-select-item-name">{deck.name}</strong>
                      <span className="deck-select-card-badge">
                        {cardCount} {cardCount === 1 ? 'từ' : 'từ'}
                      </span>
                    </div>
                    {deck.description && (
                      <p className="deck-select-item-desc">{deck.description}</p>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="deck-select-empty">
              <p className="muted">
                {search ? 'Không tìm thấy bộ thẻ nào khớp với từ khóa.' : 'Chưa có bộ thẻ nào.'}
              </p>
            </div>
          )}
        </div>

        <div className="deck-select-footer">
          <div className="deck-select-summary">
            <span>
              Đã chọn: <strong>{tempSelected.size}</strong>/{decks.length} bộ thẻ (
              <strong>{totalSelectedCards}</strong> từ)
            </span>
          </div>
          <div className="inline-actions" style={{ gap: '8px', justifyContent: 'flex-end' }}>
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
              Hủy
            </Button>
            <Button
              type="button"
              disabled={tempSelected.size === 0}
              onClick={handleConfirm}
            >
              <Check size={16} />
              Bắt đầu ôn ({totalSelectedCards} thẻ)
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
