import style from "./index.module.css";
import { ImgHTMLAttributes } from "react";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  border: boolean;
};

export function Avatar({ border = true, ...rest }: AvatarProps) {
  return (
    <img
      className={border ? style.avatarWithBorder : style.avatarNoBorder}
      {...rest}
    />
  );
}
