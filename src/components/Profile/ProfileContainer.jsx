import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import withRouter from "../common/withRouter/withRouter";
import { compose } from "redux";
class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId || this.props.authUserId

    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.router.params.userId !== prevProps.router.params.userId) this.refreshProfile()
  }

  render () {  
    return (
      <Profile {...this.props} 
      isOwner={!this.props.router.params.userId} 
      profile = { this.props.profile } 
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      savePhoto={this.props.savePhoto}
      saveProfile={this.props.saveProfile}/>
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}), withRouter)(ProfileContainer)

