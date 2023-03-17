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
      <Avatar
        src="https://scontent.fgru19-1.fna.fbcdn.net/v/t39.30808-6/278127921_2260813877399900_5222672504032022619_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5A_OzRP9wKtwnT5jW92MffdN9OoJUTzt90306glRPO-rzvUskC9DUtVuMfMJvunP_2DLWEia8Lfol48eA7frK&_nc_ohc=WIanttqSUzkAX-WqylY&_nc_ht=scontent.fgru19-1.fna&oh=00_AfDb6lFcs8_1IE-ny0lYwoQSzq2lMNOiVS-0s9jHN89BUw&oe=6413A11E"
        border={false}
      />

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
