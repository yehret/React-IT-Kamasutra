import reportWebVitals from './reportWebVitals';
// import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/reduxStore';
// import StoreContext from './storeContext';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = { store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState()
//   rerenderEntireTree(state);
// });


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
