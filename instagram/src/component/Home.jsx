import ProfileMore from "./profile/ProfileMore";
import StoryContainer from "./story/StoryCam";
import Post from "./post/Post";
import CreatePost from "./create/CreatePost";
const Home = () => {
  return (
    <div className="container">
      <div className="newsfeed">
        <div className="storyAbout">
          <StoryContainer />
        </div>
        <div className="posts">
          <CreatePost/>
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
