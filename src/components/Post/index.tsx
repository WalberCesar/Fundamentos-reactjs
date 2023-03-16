import { Avatar } from "../Avatar";
import style from "./index.module.css";

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar border />
          <div className={style.authorInfo}>
            <strong>Walber Cesar</strong>
            <span>Web Developer</span>
          </div>
        </div>
      </header>
    </article>
  );
}
