import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import style from "./index.module.css";

type CommentsProps = {
  content: string;
  comments: string[];
  setComments: React.Dispatch<React.SetStateAction<string[]>>;
};

export function Comments({ content, comments, setComments }: CommentsProps) {
  // const [filterComment, setFilterComment] = useState<string[]>([]);

  function deleteComment() {
    const deletComment = comments.filter((item) => {
      return item !== content;
    });

    setComments(deletComment);
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

            <button onClick={deleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
