import { Link } from "react-router-dom";
import { Header } from "../../components/commons/Header";
import "./NewThread.css";

export const NewThreadPagePresenter = ({
  title,
  handleChangeTitle,
  handleSubmit,
}) => {
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="title">スレッド新規作成</div>
          <input
            type="text"
            className="threadInput"
            onChange={handleChangeTitle}
            value={title}
          />
          <div className="newThreadFooter">
            <Link to={"/"}>トップに戻る</Link>
            <button className="button">作成</button>
          </div>
        </div>
      </form>
    </>
  );
};
