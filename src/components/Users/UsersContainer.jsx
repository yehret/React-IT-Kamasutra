// import React from 'react';
import { connect } from 'react-redux';
// import Users from './Users';
import Users from './Users';
import axios from 'axios';
import React from 'react';

import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
      this.props.toggleIsFetching(true)
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items);
          this.props.setUsersTotalCount(response.data.totalCount);
        });
    }
  
    onPageChange = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items);
        });
    };
  
    render() {
      return (
        <>
        { this.props.isFetching ? <Preloader /> : 
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
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
        isFetching: state.usersPage.isFetching
    }
}

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



export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching
})(UsersContainer);

// or

// export default connect()(Users)