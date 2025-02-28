export type IUser = {
    id: string;
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
    sub: string;
}

export interface ICurrentUser extends IAuthUser {
    birthdate?: string;
    name?: string;
}

export type ISignOut = {
    signOut: () => void | undefined;
  }