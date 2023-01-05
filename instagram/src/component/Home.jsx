import ProfileMore from "./profile/ProfileMore";
import StoryContainer from "./story/StoryCam";
import Post from "./post/Post";
const Home = () => {
  return (
    <div className="container">
      <div className="newsfeed">
        <div className="storyAbout">
          <StoryContainer />
        </div>
        <div className="posts">
          <Post />
        </div>
      </div>
      <div className="profiled">
        <ProfileMore />
      </div>
    </div>
  );
};
export default Home;
