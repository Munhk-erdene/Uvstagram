import { Link } from "react-router-dom";
import "./AppPost.css";
function Story({ users }) {
  return (
    <Link to={`${users._id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="storyContainer">
        <img src={users.image} alt="" className="storyImg" />
        <div style={{ textAlign: "center" }}>{users.userName}</div>
      </div>
    </Link>
  );
}

export default Story;
