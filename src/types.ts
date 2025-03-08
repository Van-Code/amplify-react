export type IBaseUser = {
    id?: string | null;
}
export type IAuthUser = {
    signInDetails?: {
        loginId: string;
        authFlowType: string;
    }
    userId?: string;
    username?: string;
    email_verified?: string;
    sub?:string;
}

export type IUser = IBaseUser & IAuthUser & {
    email?: string | null;
    birthdate?: string | null;
    name?: string | null;
    profile?: string | null;
}
