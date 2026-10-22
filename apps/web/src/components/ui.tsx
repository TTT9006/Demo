import { useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { X, ArrowRight, Volume2 } from 'lucide-react';
import { speak } from '../services/api';
import { useUI } from '../stores/ui';
export const cn = (...values: Parameters<typeof clsx>) => twMerge(clsx(values));
const buttonVariants = cva('button', {
  variants: {
    variant: { primary: 'primary', secondary: 'secondary', ghost: 'ghost', danger: 'danger' },
    size: { default: '', small: 'small', icon: 'icon-button' },
  },
  defaultVariants: { variant: 'primary', size: 'default' },
});
export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
export function Modal({
  open,
  onOpenChange,
  title,
  children,
  className,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="dialog-overlay" />
        <DialogPrimitive.Content
          className={cn('dialog-content', className)}
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="dialog-title">{title}</DialogPrimitive.Title>
          <DialogPrimitive.Close className="dialog-close" aria-label="Đóng">
            <X size={20} />
          </DialogPrimitive.Close>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <header className="page-header">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </header>
  );
}
export function Loading() {
  return (
    <div aria-label="Đang tải" className="loading-stack">
      <div className="skeleton" />
      <div className="skeleton" />
      <div className="skeleton" />
    </div>
  );
}
export function ErrorState({ error, retry }: { error: Error | null; retry?: () => void }) {
  return (
    <div className="empty-state" role="alert">
      <h3>Chưa thể tải nội dung</h3>
      <p>{error?.message || 'Vui lòng thử lại.'}</p>
      {retry && <Button onClick={retry}>Thử lại</Button>}
    </div>
  );
}
export function Empty({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="empty-state">
      <span className="empty-kanji">間</span>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
export function AudioButton({ text, className }: { text: string; className?: string }) {
  const notify = useUI((s) => s.notify);
  const [playing, setPlaying] = useState(false);
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={'Phát âm ' + text}
      className={cn(playing && 'text-primary scale-110 transition-transform duration-200', className)}
      onClick={async () => {
        try {
          setPlaying(true);
          await speak(text);
        } catch (e) {
          notify((e as Error).message);
        } finally {
          setPlaying(false);
        }
      }}
    >
      <Volume2 size={18} className={playing ? 'animate-pulse' : ''} />
    </Button>
  );
}
export function Arrow() {
  return <ArrowRight size={17} />;
}
