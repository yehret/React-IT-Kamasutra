import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} /*addPost={props.addPost} updateNewPostText={props.updateNewPostText}*//>} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="*" element={<Profile to="/profile" replace />} /> */}
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
