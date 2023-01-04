import { useState, useEffect } from "react";
import Story from "./Story";
import { instance } from "../../App";
import "./AppPost.css";

const StoryContainer = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rosponse = await instance.get("/");
    console.log(rosponse.data.data);
    setData(rosponse.data.data);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className="storyBox">
      {data &&
        data.map((users) => {
          return <Story users={users} />;
        })}
    </div>
  );
};
export default StoryContainer;
