
import { createContext } from "react";

import { IUser } from "./types";

export const initialValues: IUser = {
  id: "",
  sub: "",
  name: "",
  email: "",
  profile: "",
  birthdate: "",

};

export const UserStore = createContext(initialValues);
