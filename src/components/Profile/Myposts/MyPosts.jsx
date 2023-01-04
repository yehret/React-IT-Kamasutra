import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";

import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { ElementCreator } from "../../common/FormsControls/FormsControls";

const Textarea = ElementCreator("textarea")

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
  let postsElements = props.posts.map(el => <Post id={el.id} message={el.message}  likeCount={el.likeCount} />)

  let AddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostRedux onSubmit={AddPost} />
      <div className={p.posts}>
        {postsElements}
      </div>
    </div>
  );
};

const AddPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required, maxLength10]}  component={Textarea} name="newPostText" placeholder="Enter new post: "/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostRedux = reduxForm({ form: 'ProfileNewPost' })(AddPostForm)

export default MyPosts;
