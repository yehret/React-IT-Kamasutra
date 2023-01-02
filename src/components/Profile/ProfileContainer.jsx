import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

import { getProfile } from "../../redux/profileReducer";
import withRouter from "../common/Preloader/withRouter/withRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId || 2

    this.props.getProfile(userId)
  }

  render () {  
    return (
      <Profile {...this.props} profile = { this.props.profile }/>
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(connect(mapStateToProps, {getProfile}), withRouter)(ProfileContainer)

