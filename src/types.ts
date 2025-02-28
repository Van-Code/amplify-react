export type CurrentUser = {
    signInDetails: {
        loginId: string;
        authFlowType: string;
    }
    userId: string,
    username: string,
    loginId:string,
    sub?: string;
    name?: string;
    email?: string;
    bio?: string;
    birthdate?: string;
    imagePath?: string | null;
}
export type SignOut = {
    signOut: () => void;
  }