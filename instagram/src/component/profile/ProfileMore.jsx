import { useState } from "react";
import { instance } from "../../App";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UsersOfMore from "./UsersOfMore";
const ProfileMore = () => {
  const [data, setData] = useState([]);
  const [pic, setPic] = useState([]);

  const getData = async () => {
    const response = await instance.get(`/`);
    setData(response.data.data);
    setPic(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className="profile">
      <div className="myProfile">
        <div className="profileMain">
          <img src={pic.image} alt="" className="myProfileImg" />
          <Link
            to={pic._id}
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
            }}
          >
            {" "}
            <div className="myUserName">{pic.userName}</div>
          </Link>
        </div>
        <div className="Switch">Switch</div>
      </div>
      <div className="suggest">
        <div className="suggestText">Suggestions for you</div>
        {data &&
          data.map((user) => {
            return (
              <div>
                <UsersOfMore userName={user} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProfileMore;
