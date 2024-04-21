import { Link } from "react-router-dom";
import { Header } from "../../components/commons/Header";
import "./Threads.css";

export const ThreadsPagePresenter = ({ threads }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="title">新着スレッド</div>
        <div className="threadList">
          {threads.map((thread) => (
            <Link
              key={thread.id}
              to={`/thread/${thread.id}`}
              className="threadListItem"
              state={{ title: thread.title }}
            >
              {thread.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
