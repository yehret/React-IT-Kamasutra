import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

import { getProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import withRouter from "../common/Preloader/withRouter/withRouter";
import { compose } from "redux";
class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId || 27260

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
  status: state.profilePage.status
})

export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus }), withRouter)(ProfileContainer)

