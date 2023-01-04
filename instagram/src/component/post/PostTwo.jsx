import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { instance, instanceTwo } from "../../App";
const PostTwo = () => {
  const [value, setValue] = useState([]);
  const getPic = async () => {
    const res = await instance.get("");
    console.log(res.data.data);
    setValue(res.data.data);
  };
  useEffect(() => {
    getPic();
  }, []);

  return (
    <div className="userDataContainer">
      {" "}
      <div className="userData">
        <img src={value.image} alt="" className="userDataBox" />
        <div>{value.userName}</div>
        <div className="names">
          <Link
            to={`${value._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>{value.userName}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostTwo;
