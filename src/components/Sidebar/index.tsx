import style from "./index.module.css";

export function Sidebar() {
  return (
    <>
      <aside className={style.sidebar}>
        <img
          className={style.cover}
          src="https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        />
        <div>
          <strong>Walber Cesar</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">Editar seu perfil</a>
        </footer>
      </aside>
    </>
  );
}
