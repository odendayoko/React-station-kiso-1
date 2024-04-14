import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="headerTitle">
        掲示板
      </Link>
      <div className="addButton">
        <Link to={`/thread/new`}>スレッドを立てる</Link>
      </div>
    </header>
  );
};
