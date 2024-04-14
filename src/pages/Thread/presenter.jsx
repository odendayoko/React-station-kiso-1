import { Header } from "../../components/commons/Header";
import "./Thread.css";

export const ThreadPagePresenter = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="threadContainer">
        <div className="threadTitle">タイトルどうする？？</div>
        <div className="threadBody">
          <div className="postMain">
            {posts.map((post) => (
              <div key={post.id} className="postListItem">
                {post.post}
              </div>
            ))}
          </div>
          <div className="newPostFrom">
            <form></form>
          </div>
        </div>
      </div>
    </>
  );
};
