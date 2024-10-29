import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: PageLoaderProps) {
  return (
    <div className={classNames(styles.PageLoader, {}, [className ?? ""])}>
      <div className={styles["lds-grid"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
