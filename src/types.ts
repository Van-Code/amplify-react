export type IUser = {
    id: string;
    name?: string;
    email?: string;
    bio?: string;
    imagePath?: string | null;
}
export interface IAuthUser extends IUser {
    signInDetails: {
        loginId: string;
        authFlowType: string;
    }
    userId: string,
    username: string,
}

export interface ICurrentUser extends IAuthUser {
    email?: string;
    birthdate?: string;
}

export type ISignOut = {
    signOut: () => void | undefined;
  }