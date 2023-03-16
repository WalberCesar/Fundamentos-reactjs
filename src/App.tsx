import { Header } from "./components/Header";
import { Post } from "./components/Post";

import style from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl:
          "https://scontent.fgru19-1.fna.fbcdn.net/v/t39.30808-6/278127921_2260813877399900_5222672504032022619_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5A_OzRP9wKtwnT5jW92MffdN9OoJUTzt90306glRPO-rzvUskC9DUtVuMfMJvunP_2DLWEia8Lfol48eA7frK&_nc_ohc=WIanttqSUzkAX-WqylY&_nc_ht=scontent.fgru19-1.fna&oh=00_AfDb6lFcs8_1IE-ny0lYwoQSzq2lMNOiVS-0s9jHN89BUw&oe=6413A11E",
        name: "Walber Cesar",
        role: "Student",
      },
      content: [
        { type: "paragraph", content: "Fala galera 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-03-16 16:50:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mayk Brito",
        role: "Educator @Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galera 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-05-10 20:00:00"),
    },
  ];

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
