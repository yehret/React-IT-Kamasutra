import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id: 1, message: "Hi, how are you?", likeCount: 10},
    {id: 2, message: "It's my first post", likeCount: 15},
    {id: 3, message: "Psh-psh-psh", likeCount: 23},
    {id: 4, message: "Yo", likeCount: 7},
    {id: 5, message: "Im cool, man", likeCount: 2},
  ]

  let postsElements = posts.map(el => <Post message={el.message}  likeCount={el.likeCount} />)

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={p.posts}>
        {postsElements}

        {/* <Post message={postsData[1].message}  likeCount={postsData[1].likeCount} /> */}
      </div>
    </div>
  );
};

export default MyPosts;
