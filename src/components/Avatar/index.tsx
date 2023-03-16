import style from "./index.module.css";

type AvatarProps = {
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
