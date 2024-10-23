import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(styles.navbar, {}, [className ?? ""])}>
      <div>
        <ThemeSwitcher />
      </div>

      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
}
