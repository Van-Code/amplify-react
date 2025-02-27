

import { BrowserRouter, Routes, Route } from "react-router";
import UserView from "./UserView";
import Feed from "./Feed";
import MainMenu from "./MainMenu";


function App(props) {
  const {
    currentUser,
    signOut
  } = props;


  return (
    <>
    <MainMenu signOut={signOut}/>
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed/> }/>
        <Route path="/" element={<UserView user={currentUser}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
