import p from "./Post.module.css";

const Post = () => {
  return (
    <div className={p.item}>
      <img className={p.icon} src="https://cdn-icons-png.flaticon.com/512/147/147133.png" alt="icon"/>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
