import p from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={p.profilebg}>
        <img
          src="https://www.feit.com/wp-content/uploads/2017/03/old-new.jpg"
          alt="main-png"
        />
      </div>
      <div className={p.descriptionBlock}>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
