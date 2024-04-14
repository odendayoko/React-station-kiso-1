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
            <div key={thread.id} className="threadListItem">
              {thread.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
