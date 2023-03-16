import { Avatar } from "../Avatar";
import { Comments } from "../Comments";
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

        <time title="16 de Março ás 14h30" dateTime="2023-03-16">
          Publicado há 1h
        </time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comments />
        <Comments />
        <Comments />
      </div>
    </article>
  );
}
