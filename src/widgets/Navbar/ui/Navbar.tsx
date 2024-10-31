import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { ThemeButton } from "@/shared/ui/Button/ui/Button";
import { useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal/ui/Modal";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className ?? ""])}>
      <Button theme={ThemeButton.OUTLINE} onClick={onToggleModal}>
        {t("Sign in")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        quidem, ratione culpa sunt iusto consequatur consequuntur labore
        blanditiis omnis rerum veniam minus ullam odio facere maiores
        necessitatibus, repellendus, expedita nam.
      </Modal>
    </div>
  );
}
