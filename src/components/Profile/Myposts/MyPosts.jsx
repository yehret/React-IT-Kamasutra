import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  // let posts = [
  //   {id: 1, message: "Hi, how are you?", likeCount: 10},
  //   {id: 2, message: "It's my first post", likeCount: 15},
  //   {id: 3, message: "Psh-psh-psh", likeCount: 23},
  //   {id: 4, message: "Yo", likeCount: 7},
  //   {id: 5, message: "Im cool, man", likeCount: 2},
  // ]
  let postsElements = props.posts.map(el => <Post id={el.id} message={el.message}  likeCount={el.likeCount} />)

  let addPost = () => {
    let text = newPostElement.current.value
    alert(text)
}

  let newPostElement = React.createRef()

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
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
