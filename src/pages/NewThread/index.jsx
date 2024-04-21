import axios from "axios";
import { NewThreadPagePresenter } from "./presenter";
import { useState } from "react";

export const NewThreadPage = () => {
  const [title, setTitle] = useState("");

  const newThread = async (title) => {
    try {
      await axios.post("https://railway.bulletinboard.techtrain.dev/threads", {
        title,
      });
      // alertよりはTopに戻すほうが親切
      // state初期化したほうがいいかも
      alert("スレッドを投稿しました");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "") {
      return;
    }

    newThread(title);
  };

  return (
    <NewThreadPagePresenter
      title={title}
      handleChangeTitle={handleChangeTitle}
      handleSubmit={handleSubmit}
    />
  );
};
