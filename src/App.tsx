import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStore, initialUser } from './hooks';
import { useEffect, useState } from "react";
import UserView from "./UserView";
import MainMenu from "./MainMenu";
import Discover from "./Discover";
import AccountUpdateForm from "./components/AccountUpdateForm";
import { IUser } from "./types";
import { generateClient } from "aws-amplify/api";
import { type Schema } from '../amplify/data/resource';

type IProps = {
  email?: string,
  id?: string
}

const client = generateClient<Schema>();

function App(props: IProps) {
  initialUser.email = props.email;
  initialUser.id = props.id;
  initialUser.sub = props.id ?? "";
  initialUser.birthdate = ""

  const [user, handleUpdate] = useState<IUser>(initialUser);

  function triggerUpdateUser(data: IUser) {
    handleUpdate(data)

  }
  const getUser = async () => {
    //check if auth user exists in Dynamo
    const { data: dataUser } = await client.models.User.get({
      id: props.id,
    },)

    //create user
    if (dataUser == null) {
      createUser();
    } else {
      triggerUpdateUser({ ...user, ...dataUser })
    }
  }

  const createUser = async () => {
    const { data: dataUser } = await client.models.User.create(initialUser)
    if (dataUser) {
      triggerUpdateUser({ ...initialUser, ...user });
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <UserStore.Provider value={{ user, triggerUpdateUser }}>
          <Routes>
            <Route path="/account" element={<AccountUpdateForm />} />
            <Route path="/profile" element={<UserView />} />
            <Route path="/" element={<Discover />} />
          </Routes>
        </UserStore.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
