import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={p.item} id={props.id}>
      <img className={p.icon} src="https://cdn-icons-png.flaticon.com/512/147/147133.png" alt="icon"/>
      <p className={p.message}>{props.message}</p>
      <div className={p.likes}>
        <span>likes: {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
