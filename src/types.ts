interface IBaseUser {
    email: string;
    bio: string;
    imagePath: string | undefined;
}
export interface ILoginId {
    loginId: string;
}
export interface IAuthUser {
    signInDetails: {
        loginId: string;
        authFlowType: string;
    }
    username: string;
    userId: string,
    sub?: string;
}

export interface IUser extends IBaseUser {
    birthdate: string;
    name: string;
}

export type ISignOut = {
    signOut: () => void | undefined;
  }