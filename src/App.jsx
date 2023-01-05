import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

import { initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import AppPreloader from "./components/common/Preloader/AppPreloader/AppPreloader";

class App extends React.Component{
  // debugger

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized) return <AppPreloader />

    return (      
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="*" element={<Profile to="/profile" replace />} /> */}
          </Routes>

        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose( connect(mapStateToProps, { initializeApp }) )(App);
