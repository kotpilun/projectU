import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className ?? "",
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          About
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
}
