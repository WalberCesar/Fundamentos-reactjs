import { Header } from "./components/Header";
import { Post } from "./Post";

import style from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
