import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import style from "./index.module.css";

type CommentsProps = {
  content: string;
  handleDeleteComment(comment: string): void;
};

export function Comments({ content, handleDeleteComment }: CommentsProps) {
  const [likes, setLikes] = useState(0);

  function handleLikedComment() {
    setLikes((state) => state + 1);
  }

  return (
    <div className={style.comment}>
      <Avatar border={false} />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={() => handleDeleteComment(content)}
              title="Deletar comentário"
            >
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikedComment}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
