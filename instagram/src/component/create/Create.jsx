import React from "react";
import { instanceTwo, instance } from "../../App";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const background = useRef();
  const title = useRef();
  const name = useRef();
  const zurag = useRef();

  const clickHandler = async () => {
    await instanceTwo
      .post("", {
        backgroundImage: background.current.value,
        title: title.current.value,
      })
      .catch((e) => toast.error(e.response.data.data));
  };
  const clickHandlerTwo = async () => {
    await instance
      .post("", {
        image: zurag.current.value,
        userName: name.current.value,
      })
      .catch((e) => toast.error(e.response.data.data));
  };

  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          marginTop: "10",
        }}
      >
        create a post!
        <input ref={background} type="text" placeholder="zurag" />
        <input ref={title} type="text" placeholder="title" />
        <button onClick={clickHandler}>Create!</button>
        <ToastContainer />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "10%" }}
      >
        {" "}
        create a user!
        <input ref={zurag} type="text" placeholder="zurag" />
        <input ref={name} type="text" placeholder="username" />
        <button onClick={clickHandlerTwo}>Create!</button>
        <ToastContainer />
      </div>
    </div>
  );
};
export default Create;
