import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface NotFoundProps {
  className?: string;
}

export function NotFound({ className }: NotFoundProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames("", {}, [className ?? ""])}>
      {t("NOT FOUND")}
    </div>
  );
}
