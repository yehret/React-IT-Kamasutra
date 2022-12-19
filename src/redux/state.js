// let state = {

//     profilePage: {
//         posts: [
//           {id: 1, message: "Hi, how are you?", likeCount: 10},
//           {id: 2, message: "It's my first post", likeCount: 15},
//           {id: 3, message: "Psh-psh-psh", likeCount: 23},
//           {id: 4, message: "Yo", likeCount: 7},
//           {id: 5, message: "Im cool, man", likeCount: 2},
//         ],

//         newPostText: 'it-kamaustra.com'
        
//     },

//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Serge"},
//             {id: 2, name: "Dimych"},
//             {id: 3, name: "Valerjane"},
//             {id: 4, name: "Den"},
//             {id: 5, name: "Max"},
//             {id: 6, name: "Bogjan"},
//             {id: 7, name: "Oleg"},
//           ],
          
//         messages: [
//             {id: 1, message: "Hi"},
//             {id: 2, message: "How are you"},
//             {id: 3, message: "Psh-psh-psh"},
//             {id: 4, message: "Yo"},
//             {id: 5, message: "Im cool, man"},
//           ],
//     },
//  }

//  let rerenderEntireTree = () => {
//   console.log('state has changed');
// }

//  export const addPost = (postMessage) => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likeCount: 0
//   }
  

//   state.profilePage.posts.push(newPost)
//   state.profilePage.newPostText = ''
//   rerenderEntireTree(state);
//  }

//  export const updateNewPostText = (newPostText) => {
//   state.profilePage.newPostText = newPostText
  
//   rerenderEntireTree(state);
//  }

//  export const subscribe = (observer) => {
//   rerenderEntireTree = observer
//  }
 

let store = {
  _state: {
    profilePage: {
        posts: [
          {id: 1, message: "Hi, how are you?", likeCount: 10},
          {id: 2, message: "It's my first post", likeCount: 15},
          {id: 3, message: "Psh-psh-psh", likeCount: 23},
          {id: 4, message: "Yo", likeCount: 7},
          {id: 5, message: "Im cool, man", likeCount: 2},
        ],

        newPostText: 'it-kamaustra.com'
        
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Serge"},
            {id: 2, name: "Dimych"},
            {id: 3, name: "Valerjane"},
            {id: 4, name: "Den"},
            {id: 5, name: "Max"},
            {id: 6, name: "Bogjan"},
            {id: 7, name: "Oleg"},
          ],
          
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Psh-psh-psh"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Im cool, man"},
          ],
    },
  },

  getState() {
    return this._state
  },

  _callSubsriber() {
    console.log('State has changed');
  },

  subscribe(observer) {
    this._callSubsriber = observer
  },

  /*addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    }
    
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubsriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
  
    this._callSubsriber(this._state);
  },*/

  dispatch(action) { // { type: 'ADD-POST' }
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
      
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubsriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText
  
      this._callSubsriber(this._state);
    }
  },
}

window.store = store;

 export default store;

 // store - OOP