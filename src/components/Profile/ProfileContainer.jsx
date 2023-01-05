import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

import { getProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import withRouter from "../common/withRouter/withRouter";
import { compose } from "redux";
class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId || this.props.authUserId

    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render () {  
    return (
      <Profile {...this.props} profile = { this.props.profile } status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus }), withRouter)(ProfileContainer)

