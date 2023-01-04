const UserProfile = ({ value }) => {
  return (
    <div className="profileContainer">
      <div className="profileAbout">
        <div className="profilediv">
          <img src={value.image} alt="" className="profileImg" />
        </div>
        <div className="miniContainer">
          <div className="aboutContainer">
            <div className="about">{value.userName}</div>
            <div className="edit">edit profile</div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-gear-wide"
                viewBox="0 0 16 16"
                className="icon"
              >
                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
              </svg>
            </div>
          </div>

          <div className="followersContainer">
            <div className="followersPosts">0 posts</div>
            <div className="followers">0 followers</div>
            <div className="following">0 following</div>
          </div>
          <div>
            {value.firstName} {""}
            {value.lastName}
          </div>
        </div>
      </div>{" "}
      <div className="newStory">
        <div className="addStory">
          <img src={value.image} alt="" className="addStory" />
        </div>
      </div>
      <div className="profilePosts">
        <div className="postButtons">
          <div className="postBtn bbb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-table"
              viewBox="0 0 16 16"
              className="iconMini"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
            </svg>
            posts
          </div>
          <div className="saved bbb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bookmark"
              viewBox="0 0 16 16"
              className="iconMini"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            </svg>
            saved
          </div>
          <div className="tagged bbb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-bounding-box"
              viewBox="0 0 16 16"
              className="iconMini"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
            tagged
          </div>
        </div>
        <div className="postOfProfile">
          <div className="postImageContainer">
            <img src={value.image} alt="" className="zurag" />
          </div>
          <div className="postImageContainer">
            <img src={value.image} alt="" className="zurag" />
          </div>
          <div className="postImageContainer">
            <img src={value.image} alt="" className="zurag" />
          </div>
          <div className="postImageContainer">
            <img src={value.image} alt="" className="zurag" />
          </div>
          <div className="postImageContainer">
            <img src={value.image} alt="" className="zurag" />
          </div>
          <div className="postImageContainer">
            <img src={value.image} alt="" className="zurag" />
          </div>
          <div className="postImageContainer">
            <img src={value.image} alt="" className="zurag" />
          </div>
          <div className="postImageContainer">
            <img src={value.image} alt="" className="zurag" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
