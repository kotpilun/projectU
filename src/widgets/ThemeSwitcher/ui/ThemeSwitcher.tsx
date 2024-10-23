import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import { DarkIcon } from "@/shared/ui/DarkIcon";
import { LightIcon } from "@/shared/ui/LightIcon";
import { Button } from "@/shared/ui/Button";
import { ThemeButton } from "@/shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { toggleTheme, theme } = useTheme();
  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className ?? ""])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme == Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
