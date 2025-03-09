import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState} from "react";
import { fetchUserAttributes } from 'aws-amplify/auth';
import UserView from "./UserView";
import MainMenu from "./MainMenu";
// import ProfileCard from "./ProfileCard";
import { IUser } from "./types";
import { AuthUser } from "aws-amplify/auth";

const initialValues: IUser = {
  name: "",
  email: "",
  profile:  "",
  birthdate: "",
  sub: "",
  email_verified: "false"
};
type IProps = {
  signOut?: ()=> void;
  user?: AuthUser;
}
export const StoreContext = createContext(initialValues);

function App(props:IProps) {
  const [user, setUser] = useState<IUser>(initialValues);
 
  const onLoad = async() =>{
      const data = await fetchUserAttributes();
      if(data){
        const userData = {...initialValues,...data};
        setUser(userData);
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
      <StoreContext.Provider value={user}>
        <Routes>  
            {/* <Route path="/feed" element={<ProfileCard/> }/> */}
            <Route path="/" element={<UserView />} />
          
        </Routes>
      </StoreContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
