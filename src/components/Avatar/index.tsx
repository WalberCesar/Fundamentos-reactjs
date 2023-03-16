import style from "./index.module.css";

type AvatarProps = {
  border: boolean;
};

export function Avatar({ border = true }: AvatarProps) {
  return (
    <img
      className={border ? style.avatarWithBorder : style.avatarNoBorder}
      src="https://scontent.fgru19-1.fna.fbcdn.net/v/t39.30808-6/278127921_2260813877399900_5222672504032022619_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5A_OzRP9wKtwnT5jW92MffdN9OoJUTzt90306glRPO-rzvUskC9DUtVuMfMJvunP_2DLWEia8Lfol48eA7frK&_nc_ohc=WIanttqSUzkAX-WqylY&_nc_ht=scontent.fgru19-1.fna&oh=00_AfDb6lFcs8_1IE-ny0lYwoQSzq2lMNOiVS-0s9jHN89BUw&oe=6413A11E"
    />
  );
}
