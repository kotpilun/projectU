import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./LightIcon.module.scss";
import LightIconImg from "@/shared/assets/icons/theme-light.svg";

interface LightIconProps {
  className?: string;
}

export function LightIcon({ className }: LightIconProps) {
  return (
    <img
      src={LightIconImg}
      className={classNames(styles.LightIcon, {}, [className ?? ""])}
    />
  );
}
