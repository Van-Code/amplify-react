import { BrowserRouter, Routes, Route } from "react-router";
import { AuthUser } from "aws-amplify/auth";
import UserView from "./UserView";
import MainMenu from "./MainMenu";
import ProfileCard from "./ProfileCard";
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../amplify/data/resource';
import { useEffect,useState } from "react";
import { IUser } from "./types";
import { validateNumber } from "aws-cdk-lib";

const client = generateClient<Schema>();

type IProps = {
  authUser: AuthUser
}

function App(props:IProps) {
  const {
    authUser: signedInUser,
  } = props;

  const initialValues = {
    id: signedInUser.username,
    email: signedInUser.signInDetails?.loginId,
    name: "",
    bio: "",
    birthdate:""

  }
  const [posts, setTodos] = useState<IUser>(initialValues);


  const fetchUser = async()=>{

      // get a specific item
      let { data: user } = await client.models.User.get({
        id: signedInUser.userId,
      });

      if(user){
        const userDetails = {
          name: user?.name ?? posts.name,
          email: signedInUser.signInDetails?.loginId ?? posts.email,
          bio: user?.bio ?? posts.name,
          id: signedInUser.username,
          birthdate: user?.birthdate ?? posts.birthdate
        }
        user = {...user,...userDetails};
        console.log("true",user)
     
        setTodos(user)
      }else{
        
      const {data: user} = await client.models.User.create(initialValues);
        console.log("False",user)
      setTodos(user)
      }
  };

  useEffect(() => {
    // client.models.Post.observeQuery().subscribe({
    //   next: (data) => setTodos([...data.items]),
    // });
    fetchUser()
  }, []);


  return (
    <>
    <MainMenu />
    <BrowserRouter>
      <Routes>  
        <Route path="/feed" element={<ProfileCard user={posts}/> }/>
        <Route path="/" element={<UserView user={posts}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
