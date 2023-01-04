import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS;'

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setStatus = (status) => ({ type: SET_STATUS, status })

let initialState = {
    posts: [
      {id: 1, message: "Hi, how are you?", likeCount: 10},
      {id: 2, message: "It's my first post", likeCount: 15},
      {id: 3, message: "Psh-psh-psh", likeCount: 23},
      {id: 4, message: "Yo", likeCount: 7},
      {id: 5, message: "Im cool, man", likeCount: 2},
    ],
    profile: null,
    newPostText: 'it-kamaustra.com',
    status: ''
    
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
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
        .then((data) => {
          dispatch(setUserProfile(data))
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
        .then((data) => {
          dispatch(setStatus(data))
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then((data) => {
          dispatch(setStatus(status))
        });
    }
}

export default profileReducer
