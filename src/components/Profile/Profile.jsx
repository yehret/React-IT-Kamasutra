import MyPosts from "./Myposts/MyPosts";
import p from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={p.content}>
      <div className={p.profilebg}>
        <img
          src="https://www.feit.com/wp-content/uploads/2017/03/old-new.jpg"
          alt="main-png"
        />
      </div>
      <div>ava + desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
