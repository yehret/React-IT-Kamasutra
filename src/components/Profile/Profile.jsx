// import MyPosts from "./Myposts/MyPosts";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import p from "./Profile.module.css";


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile = { props.profile } status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer /*store = { props.store }*//>
    </div>
  );
};

export default Profile;
