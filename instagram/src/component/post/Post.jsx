import { useEffect } from "react";
import { useState } from "react";
import PostOne from "./PostOne";
import { instanceTwo } from "../../App";

const Post = () => {
  const [post, setPost] = useState([]);
  const getData = async () => {
    const res = await instanceTwo.get(``);
    setPost(res.data.posts);
  };

  useEffect(() => {
    getData();
  }, [post]);
  return (
    <div className="postContainer">
      {post &&
        post.map((e) => {
          return <PostOne value={e} />;
        })}
    </div>
  );
};
export default Post;
