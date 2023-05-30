import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const arrUser = [
    {
      id:0,
      name: "goku",
      userName: "goku",
      isFollowing: true,
    },
    {
      id:1,
      name: "naruto",
      userName: "hokage",
      isFollowing: true,
    },
    {
      id:2,
      name: "killua",
      userName: "killua",
      isFollowing: true,
    },
    {
      id:3,
      name: "midudev",
      userName: "miguel",
      isFollowing: false,
    },
  ];
  const format = (userName) => `@${userName}`;
  return (
    <section className="App">
      {
        arrUser.map(({ id, name, userName, isFollowing }) => (
            <TwitterFollowCard
            key={id} //todos deberían tener una key para que react diferencie el elemento
            formatUserName={format}
            initialIsFollowing={isFollowing}
            userName={userName}
            >
            {name}
            </TwitterFollowCard>
        ))
      }
    </section>
  );
}
