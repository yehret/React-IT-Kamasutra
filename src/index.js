import reportWebVitals from './reportWebVitals';
// import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} /*addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}*//>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);


// const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderEntireTree = () => {
//   root.render(
//     <React.StrictMode>
//       <App state={state} addPost={addPost}/>
//     </React.StrictMode>
//   );
// }

/* <App posts={posts} dialogs={dialogs} messages={messages}/> */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
