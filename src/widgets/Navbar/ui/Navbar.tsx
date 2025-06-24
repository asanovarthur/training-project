import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
