import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map(el => <Post id={el.id} message={el.message}  likeCount={el.likeCount} />)

  let onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
    // let action = updateNewPostTextActionCreator(text)
    // props.dispatch(action)
  }

  let newPostElement = React.createRef()
  
  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange = { onPostChange } ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      <div className={p.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
