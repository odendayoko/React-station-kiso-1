import { Header } from "../../components/commons/Header";
import "./Thread.css";

export const ThreadPagePresenter = ({
  posts,
  postText,
  handleChangePostText,
  handleSubmit,
  title,
}) => {
  return (
    <>
      <Header />
      <div className="threadContainer">
        <div className="threadTitle">{title}</div>
        <div className="threadBody">
          <div className="postMain">
            {posts.map((post) => (
              <div key={post.id} className="postListItem">
                {post.post}
              </div>
            ))}
          </div>
          <div className="newPostForm">
            <form onSubmit={handleSubmit}>
              <textarea
                className="newPostText"
                placeholder="投稿しよう！"
                value={postText}
                onChange={handleChangePostText}
              />
              <button className="newPostButton">投稿</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
