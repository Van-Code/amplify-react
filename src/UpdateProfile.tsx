import UserUpdateForm from '../ui-components/UserUpdateForm.jsx'; // @ts-ignore
import { IUser } from './types';
import { View } from '@aws-amplify/ui-react';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import { updateUserAttributes } from "aws-amplify/auth";
import {UserUpdateFormInputValues} from '../ui-components/UserUpdateForm.ts';

type IProps = {
    user: IUser
}

export default function UpdateProfile(props:IProps){
    const {user} = props;

    const updateFunc = async(fields:UserUpdateFormInputValues) => {
        await updateUserAttributes({
            userAttributes:{
                profile: fields.profile,
                name: fields.name,
                email: fields.email,
                birthdate: fields.birthdate
            }
        });
        return fields
    }

    return (
        <View>
            <FileUploader
                acceptedFileTypes={['image/*']}
                path={({ identityId }) => `profile-pictures/${identityId}/${user?.username}/`}
                maxFileCount={1}
                isResumable
                />
            <UserUpdateForm id={user?.userId} user={user} onSubmit={updateFunc}></UserUpdateForm>
        </View>
    )
}