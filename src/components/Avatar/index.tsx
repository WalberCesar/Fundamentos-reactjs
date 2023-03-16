import style from "./index.module.css";
import { ImgHTMLAttributes } from "react";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  border: boolean;
  avatarUrl?: string;
};

export function Avatar({ border = true, avatarUrl }: AvatarProps) {
  return (
    <img
      className={border ? style.avatarWithBorder : style.avatarNoBorder}
      src={avatarUrl}
    />
  );
}
