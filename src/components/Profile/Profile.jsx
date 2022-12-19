import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import p from "./Profile.module.css";


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} /*addPost={props.addPost} updateNewPostText={props.updateNewPostText}*//>
    </div>
  );
};

export default Profile;
