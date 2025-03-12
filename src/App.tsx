import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import UserView from "./UserView";
import MainMenu from "./MainMenu";
import Discover from "./Discover";
import { IUser } from "./types";
import { generateClient } from "aws-amplify/api";
import { type Schema } from '../amplify/data/resource';
import { UserStore, initialValues } from './hooks';

type IProps = {
  email?: string | null,
  id?: string | null
}

const client = generateClient<Schema>();

function App(props: IProps) {
  const [user, setUser] = useState<IUser>(initialValues);
  initialValues.email = props.email;
  initialValues.id = props.id;
  initialValues.sub = props.id;
  const getUser = async () => {
    //check if auth user exists in Dynamo
    const { data: dataUser } = await client.models.User.get({
      id: props.id,
    },)

    //create user
    if (dataUser == null) {
      createUser(initialValues);
    } else {
      setUser(dataUser)
    }
  }

  const createUser = async (userProps: IUser) => {
    const { data: dataUser } = await client.models.User.create({
      id: props.id,
      email: userProps.email
    })
    if (dataUser) {
      setUser(initialValues);
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <UserStore.Provider value={user}>
          <Routes>
            <Route path="/discover" element={<Discover />} />
            <Route path="/account" element={<UserView />} />
            <Route path="/" element={<Discover />} />
          </Routes>
        </UserStore.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
