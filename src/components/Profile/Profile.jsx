
import MyPostsContainer from "./Myposts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner} profile = { props.profile } status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
