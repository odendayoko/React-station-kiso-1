import { useCallback, useEffect, useState } from "react";
import { ThreadPagePresenter } from "./presenter";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

export const ThreadPage = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const { state } = useLocation();

  const { thread_id } = useParams();

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
        { params: { offset: 0 } }
      );
      setPosts(response.data.posts);
    } catch (error) {
      console.log("error", error);
    }
  }, [thread_id]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts, thread_id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
        { post: postText }
      );
      alert("送信しました");

      fetchPosts();
      setPostText("");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChangePostText = (event) => {
    setPostText(event.target.value);
  };

  return (
    <ThreadPagePresenter
      posts={posts}
      postText={postText}
      handleChangePostText={handleChangePostText}
      handleSubmit={handleSubmit}
      title={state.title}
    />
  );
};
