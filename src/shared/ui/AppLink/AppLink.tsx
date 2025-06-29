import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface Props extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<Props> = (props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
