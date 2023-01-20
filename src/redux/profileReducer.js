import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS;'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
// export const saveProfileSuccess = (profile) => ({ type SAVE_PROFILE_SUCESS, profile })

export const getProfile = (userId) => async (dispatch) => {
     let response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
     let response = await profileAPI.getUserStatus(userId)
        dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (!response.data.resultCode) dispatch(setStatus(status))
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (!response.data.resultCode) dispatch(savePhotoSuccess(response.data.data.photos))
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)

    if (!response.data.resultCode) dispatch(getProfile(userId))
    else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]} ))
        return Promise.reject(response.data.messages[0])
    }
    // {"contacts": {"facebook": response.data.messages[0]} }
}

export default profileReducer
