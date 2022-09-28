import p from './Profile.module.css';


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
      <div>
        my posts
        <div>new post</div>
        <div className={p.posts}>
          <div className={p.item}>post 1</div>
          <div className={p.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
