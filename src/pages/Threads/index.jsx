import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ThreadsPagePresenter } from "./presenter";

export const ThreadsPage = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get(
          "https://railway.bulletinboard.techtrain.dev/threads",
          { params: { offset: 1 } }
        );
        setThreads(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchThreads();
  }, []);

  return <ThreadsPagePresenter threads={threads} />;
};
