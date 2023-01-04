import { connect } from "react-redux";

import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => dispatch(addPostActionCreator(text)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;


// const MyPostsContainer = (props) => {
//   //let state = props.store.getState();

//   // let addPost = () => {
//   //   props.store.dispatch(addPostActionCreator())
//   // }

//   // let onPostChange = (text) => {
//   //   let action = updateNewPostTextActionCreator(text)
//   //   props.store.dispatch(action)
//   // }
  
//   return <StoreContext.Consumer> 
//     { store => {
//       let state = store.getState();

//       let addPost = () => {
//        store.dispatch(addPostActionCreator())
//       }
    
//       let onPostChange = (text) => {
//         store.dispatch(updateNewPostTextActionCreator(text))
//       }

//       return <MyPosts updateNewPostText = { onPostChange } addPost = { addPost } posts = { state.profilePage.posts } newPostText = { state.profilePage.newPostText }/>
//     }}
//     </StoreContext.Consumer>
// };
