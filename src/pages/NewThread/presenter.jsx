import { Link } from "react-router-dom";
import { Header } from "../../components/commons/Header";
import "./NewThread.css";

export const NewThreadPagePresenter = () => {
  return (
    <>
      <Header />
      <form onSubmit={() => {}}>
        <div className="container">
          <div className="title">スレッド新規作成</div>
          <input type="text" className="threadInput" />
          <div className="newThreadFooter">
            <Link to={"/"}>トップに戻る</Link>
            <button className="button" onClick={() => {}}>
              作成
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
