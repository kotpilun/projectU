import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export function Portal({ children, element = document.body }: PortalProps) {
  if (!element) {
    console.error("Target element is not a valid DOM element");
    return null;
  }
  return createPortal(children, element);
}
