import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_COUNT = 'SET-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                 users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                 })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                 users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                 })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.pageNumber }
        }
        case SET_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, 
                followingInProgress: action.isFollowing 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId) 
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setUsersTotalCount = (count) => ({ type: SET_COUNT, count})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId })

export const getUsers = (currentPage, pageSize) => {
     return(dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
        });
    }
}

export const unfollowUser = (userId) => {
    return(dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}

export const followUser = (userId) => {
    return(dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}

export default usersReducer
