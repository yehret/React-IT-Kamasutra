import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

import { setUserProfile } from "../../redux/profileReducer";
import withRouter from "../common/Preloader/withRouter/withRouter";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId || 2

    usersAPI.getUserProfile(userId)
    .then((data) => {
      this.props.setUserProfile(data)
    });
  }

  render () {
    return (
      <Profile {...this.props} profile = { this.props.profile }/>
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
