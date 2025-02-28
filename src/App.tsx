

import { BrowserRouter, Routes, Route } from "react-router";
import UserView from "./UserView";
import Feed from "./Feed";
import MainMenu from "./MainMenu";
import {IAuthUser, ICurrentUser, ISignOut} from './types'

type IProps = {
  authUser: IAuthUser
  currentUser: ICurrentUser,
  signOut: ISignOut
}

function App(props:IProps) {
  const {
    currentUser,
    signOut
  } = props;
// console.log(currentUser)
  return (
    <>
    <MainMenu signOut={signOut}/>
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed/> }/>
        <Route path="/" element={<UserView currentUser={currentUser}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
