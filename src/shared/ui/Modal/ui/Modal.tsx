import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Modal({ className, children, isOpen, onClose }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const modalContainerRef = useRef<HTMLElement | null>(null);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen ?? false,
    [styles.isClosing]: isClosing,
  };

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  modalContainerRef.current = document.querySelector(".app") as HTMLElement;

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    modalContainerRef.current && (
      <Portal element={modalContainerRef.current}>
        <div className={classNames(styles.Modal, mods, [className ?? ""])}>
          <div className={styles.overlay} onClick={closeHandler}>
            <div className={styles.content} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )
  );
}
