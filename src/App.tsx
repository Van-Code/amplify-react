

import { BrowserRouter, Routes, Route } from "react-router";
import UserView from "./UserView";
import Feed from "./Feed";
import MainMenu from "./MainMenu";
import {CurrentUser, SignOut} from './types'

type IProps = {
  currentUser: CurrentUser,
  signOut: SignOut
}

function App(props:IProps) {
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
