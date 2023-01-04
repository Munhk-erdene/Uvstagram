import house from "./assets/house.png";
import explore from "./assets/explore.png";
import reels from "./assets/reels.png";
import igLogo from "./assets/igLogo.png";
import instagram from "./assets/instagram.png";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { NavbarChange } from "../../App";
import { instance } from "../../App";
import e from "cors";
const Navbar = () => {
  const { navbar, setNavbar } = useContext(NavbarChange);
  const [profile, setProfile] = useState([]);
  const getPic = async () => {
    const res = await instance.get("");
    setProfile(res.data.data);
  };
  console.log(profile);
  useEffect(() => {
    getPic();
  }, []);
  const click = () => {
    if (navbar === false) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(navbar);
  };
  return (
    <div className="navbar" id="navbar">
      <div className="buttonLogo">
        <img
          src={instagram}
          style={{
            width: "103px",
            height: "39px",
            marginLeft: "20px",
            marginTop: "15px",
          }}
          alt=""
          className="visible"
        />
        <img
          src={igLogo}
          style={{
            width: "26px",
            height: "26px",
          }}
          alt=""
          className="none"
        />
      </div>
      <div className="navbarButtonContainer">
        <Link
          className="navbarButton"
          to="./"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="navbarImg">
            <img src={house} style={{ width: "22px", height: "22px" }} alt="" />
          </div>
          <span className="buttonName">Home</span>
        </Link>
        <div className="navbarButton" onClick={click}>
          <div className="navbarImg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
              style={{ width: "25px", height: "25px" }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <span className="buttonName">Search</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img
              src={explore}
              style={{ width: "25px", height: "25px" }}
              alt=""
            />
          </div>{" "}
          <span className="buttonName">Explore</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img src={reels} style={{ width: "28px", height: "28px" }} alt="" />
          </div>{" "}
          <span className="buttonName">Reels</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-messenger"
              viewBox="0 0 16 16"
              style={{ width: "25px", height: "25px" }}
            >
              <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
            </svg>
          </div>{" "}
          <span className="buttonName">Messages</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
              style={{ width: "25px", height: "25px" }}
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
          <span className="buttonName">Notifications</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-square"
              viewBox="0 0 16 16"
              style={{ width: "25px", height: "25px" }}
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
          <span className="buttonName">Create</span>
        </div>
        <Link
          to="./1"
          className="navbarButton"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            className="navbarImg"
            style={{ backgroundColor: "black", borderRadius: "50%" }}
          >
            <img
              src={profile.image}
              style={{ width: "30px", height: "30px" }}
              alt=""
            />
            <div>
  
            </div>
          </div>
          <span className="buttonName">Profile</span>
        </Link>
      </div>
      <div className="more"></div>
    </div>
  );
};
export default Navbar;
