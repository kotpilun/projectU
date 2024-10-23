import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./DarkIcon.module.scss";
import DarkIconImg from "@/shared/assets/icons/theme-dark.svg";

interface DarkIconProps {
  className?: string;
}

export function DarkIcon({ className }: DarkIconProps) {
  return (
    <img
      src={DarkIconImg}
      className={classNames(styles.DarkIcon, {}, [className ?? ""])}
    />
  );
}
