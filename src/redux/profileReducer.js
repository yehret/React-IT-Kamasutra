const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

let initialState = {
    posts: [
      {id: 1, message: "Hi, how are you?", likeCount: 10},
      {id: 2, message: "It's my first post", likeCount: 15},
      {id: 3, message: "Psh-psh-psh", likeCount: 23},
      {id: 4, message: "Yo", likeCount: 7},
      {id: 5, message: "Im cool, man", likeCount: 2},
    ],
    profile: null,
    newPostText: 'it-kamaustra.com'
    
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likeCount: 0
            }

            return {
                ...state,
                posts:  [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer
