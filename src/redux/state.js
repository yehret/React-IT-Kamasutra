let state = {

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
 }

 let rerenderEntireTree = () => {
  console.log('state has changed');
}

 export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state);
 }

 export const updateNewPostText = (newPostText) => {
  state.profilePage.newPostText = newPostText
  
  rerenderEntireTree(state);
 }

 export const subscribe = (observer) => {
  rerenderEntireTree = observer
 }
 

 export default state

 // store - OOP