import { BrowserRouter, Routes, Route } from "react-router";
import UserView from "./UserView";
import MainMenu from "./MainMenu";
import ProfileCard from "./ProfileCard";
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../amplify/data/resource';
import { useEffect,useState } from "react";
import {IUser} from './types';

const client = generateClient<Schema>();

type IProps = {
  loginId?: string,
  userId?: string
}

function App(props:IProps) {
  const {
    loginId, userId
  } = props;

  const initialValues = {
    id: userId || "",
    email:  loginId || ""
  }
  const [user, setUser] = useState<IUser>(initialValues);
 
  const fetchUser = async()=>{
      let { data: user } = await client.models.User.get({
        id: userId,
      });
      if(user){
        setUser(user);
      }else{
      const {data: user2, errors} = await client.models.User.create(initialValues);
        try {
          if(user2){
            setUser(user2);
          }
        }
        catch(err){
          console.log(errors)
        }
      }
  };
  
  useEffect(() => {
    fetchUser()
  }, []);


  return (
    <>
    <MainMenu />
    <BrowserRouter>
      <Routes>  
        <Route path="/feed" element={<ProfileCard user={user}/> }/>
        <Route path="/" element={<UserView user={user}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
