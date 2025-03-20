
export type IAuthUser = {
    signInDetails?: {
        loginId: string;
        authFlowType: string;
    }
    userId?: string;
    username?: string;
    email_verified?: string;

}

export type IUser = {
    id?: string | null;
    sub: string | null;
    name?: string | null;
    email?: string | null;
    about?: string | null;
    birthdate?: string | null;
    createdAt?: string;
    updatedAt?: string;
}
export interface IContextProps {
    user: IUser;
    triggerUpdateUser: (fields: IUser) => void;

}