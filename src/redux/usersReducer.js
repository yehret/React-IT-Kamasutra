const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_COUNT = 'SET-COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                 users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, isFollowed: true}
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
                        return {...u, isFollowed: false}
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
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setUsersTotalCountAC = (count) => ({ type: SET_COUNT, count})

export default usersReducer
