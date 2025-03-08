import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { fetchUserAttributes } from 'aws-amplify/auth';
import UserView from "./UserView";
import MainMenu from "./MainMenu";
import ProfileCard from "./ProfileCard";

type IProps = {
  signOut?: ()=> void;
}
type IUser = {
  email?: string,
  email_verified?: string,
  sub?: string,
}
function App(props:IProps) {
  const [user, setUser] = useState<IUser>()
  const onLoad = async() =>{
      const data = await fetchUserAttributes();
      if(data){
        setUser(data);
      }else{
        props.signOut
      }
    }

  useEffect(()=>{
    onLoad()
  },[])

  return (
    <>
    <MainMenu />
    <BrowserRouter>
    {user && (
      <Routes>  
          <Route path="/feed" element={<ProfileCard user={user}/> }/>
          <Route path="/" element={<UserView user={user}/>} />
      </Routes>
        )}
    </BrowserRouter>
    </>
  );
}

export default App;
