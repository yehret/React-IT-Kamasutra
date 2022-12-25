// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";
// import sidebarReducer from "./sidebarReducer";

// let store = {
//   _state: {
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

//           newMessageText: '',
//     },

//     sidebar: {

//     }

//   },

//   getState() {
//     return this._state
//   },

//   _callSubsriber() {
//     console.log('State has changed');
//   },

//   subscribe(observer) {
//     this._callSubsriber = observer
//   },

//   dispatch(action) { // { type: 'ADD-POST' }

//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    
//     this._callSubsriber()
//   },
// }

// window.store = store;

// export default store;