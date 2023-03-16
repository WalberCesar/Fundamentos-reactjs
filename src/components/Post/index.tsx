import { Avatar } from "../Avatar";
import { Comments } from "../Comments";
import style from "./index.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

type PostProps = {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
};

export function Post({ author, content, publishedAt }: PostProps) {
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar avatarUrl={author.avatarUrl} border />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="16 de Março ás 14h30" dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={style.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p>{item.content}</p>;
          } else if (item.type === " link") {
            return (
              <p>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
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
