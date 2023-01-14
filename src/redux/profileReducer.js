import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS;'

let initialState = {
    posts: [
      {id: 1, message: "Hi, how are you?", likeCount: 10},
      {id: 2, message: "It's my first post", likeCount: 15},
      {id: 5, message: "Im cool, man", likeCount: 2},
    ],
    profile: null,
    status: ''
    
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.newPostText,
                likeCount: 0
            }

            return {
                ...state,
                posts:  [...state.posts, newPost],
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
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => async (dispatch) => {
     let response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response))
}

export const getStatus = (userId) => async (dispatch) => {
     let response = await profileAPI.getUserStatus(userId)
        dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (!response.data.resultCode) dispatch(setStatus(status))
}

export default profileReducer
