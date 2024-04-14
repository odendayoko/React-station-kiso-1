import { useEffect, useState } from "react";
import { ThreadPagePresenter } from "./presenter";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ThreadPage = () => {
  const [posts, setPosts] = useState([]);

  const { thread_id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
          { params: { offset: 1 } }
        );

        setPosts(response.data.posts);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchPosts();
  }, [thread_id]);

  return <ThreadPagePresenter posts={posts} />;
};
