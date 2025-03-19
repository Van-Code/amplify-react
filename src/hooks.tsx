
import { createContext } from "react";
import { IUser, IContextProps } from "./types";

export const initialUser: IUser = {
  id: "",
  sub: "",
  name: "",
  email: "",
  profile: "",
  birthdate: "",
}
export const initialValues: IContextProps = {
  user: initialUser,
  triggerUpdateUser: () => { }
};

export const UserStore = createContext<IContextProps>(initialValues);

