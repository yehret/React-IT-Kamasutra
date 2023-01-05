// import React from 'react';
import { connect } from 'react-redux';
// import Users from './Users';
import Users from './Users';
import React from 'react';

import { toggleIsFollowingProgress, getUsers, unfollowUser, followUser } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
      // this.props.toggleIsFetching(true)

      // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      //     this.props.toggleIsFetching(false)
      //     this.props.setUsers(data.items);
      //     this.props.setUsersTotalCount(data.totalCount);
      //   });
    }
  
    onPageChange = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
    };
  
    render() {
      return (
        <>
        { this.props.isFetching ? <Preloader /> : 
        <Users
          followingInProgress={this.props.followingInProgress}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}

          unfollowUser={this.props.unfollowUser}
          followUser={this.props.followUser}
        />
        }
        </>
      );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(connect(mapStateToProps, { 
  toggleIsFollowingProgress, 
  getUsers, unfollowUser, followUser
}))(UsersContainer)

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(followAC(userId)),
//         unfollow: (userId) => dispatch(unfollowAC(userId)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//         setUsersTotalCount: (count) => dispatch(setUsersTotalCountAC(count)),
//         toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
//     }
// }




