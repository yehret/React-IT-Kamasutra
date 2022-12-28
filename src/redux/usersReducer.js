const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_COUNT = 'SET-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setUsersTotalCount = (count) => ({ type: SET_COUNT, count})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer