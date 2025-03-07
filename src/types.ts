export type IBaseUser = {
    id: string;
}
export interface IAuthUser extends IBaseUser {
    signInDetails?: {
        loginId: string;
        authFlowType: string;
    }
    userId?: string,
    username?: string,
}

export interface IUser extends IAuthUser {
    email?: string;
    birthdate?: string;
    name?: string;
    bio?: string;
}

export type ISignOut = {
    signOut: () => void | undefined;
  }