import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerTitle">掲示板</div>
      <div className="addButton">
        <Link to={`/thread/new`}>スレッドを立てる</Link>
      </div>
    </header>
  );
};
