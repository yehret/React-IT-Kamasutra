import "./App.css";
import { Route, Routes } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
// import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  // debugger
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile /*store = { props.store }*//>} />
            <Route path="/dialogs/*" element={<DialogsContainer /*store = { props.store }*//>} />
            <Route path="/users" element={<UsersContainer/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="*" element={<Profile to="/profile" replace />} /> */}
          </Routes>

        </div>
      </div>
  );
};

export default App;
