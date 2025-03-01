

import { BrowserRouter, Routes, Route } from "react-router";
import UserView from "./UserView";
import Feed from "./Feed";
import MainMenu from "./MainMenu";

type IProps = {
  loginId: string | undefined
}
function App(props:IProps) {

  return (
    <>
    <MainMenu/>
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed/> }/>
        {props.loginId &&
          <Route path="/" element={<UserView loginId={props.loginId}/>} />
        }
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
