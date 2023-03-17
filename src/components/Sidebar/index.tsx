import style from "./index.module.css";

import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <>
      <aside className={style.sidebar}>
        <img
          className={style.cover}
          src="https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        />
        <div className={style.profile}>
          <Avatar
            border
            src="https://scontent.fgru19-1.fna.fbcdn.net/v/t39.30808-6/278127921_2260813877399900_5222672504032022619_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5A_OzRP9wKtwnT5jW92MffdN9OoJUTzt90306glRPO-rzvUskC9DUtVuMfMJvunP_2DLWEia8Lfol48eA7frK&_nc_ohc=WIanttqSUzkAX-WqylY&_nc_ht=scontent.fgru19-1.fna&oh=00_AfDb6lFcs8_1IE-ny0lYwoQSzq2lMNOiVS-0s9jHN89BUw&oe=6413A11E"
          />

          <strong>Walber Cesar</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
