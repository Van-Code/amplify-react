import { useContext } from 'react';
import { UserStore } from './hooks';
import { UserUpdateFormInputValues } from './components/UserUpdateForm.jsx'; // @ts-ignore
import UserUpdateForm from './components/UserUpdateForm.jsx'; // @ts-ignore
import { IUser } from './types';
import { View } from '@aws-amplify/ui-react';
import { FileUploader } from '@aws-amplify/ui-react-storage';


export default function UpdateProfile() {
    const { user, triggerUpdateUser } = useContext(UserStore);
    const newObj = { ...user }
    function onSubmit(fields: UserUpdateFormInputValues) {
        Object.entries(fields).forEach(([key, value]) => {
            const userKey = key as keyof typeof user;
            if (value !== user[userKey]) {
                newObj[userKey] = value;
            }
        });
        triggerUpdateUser(newObj);
        return fields;
    }
    return (
        <View>
            <FileUploader
                acceptedFileTypes={['image/*']}
                path={({ identityId }) => `profile-pictures/${identityId}/${user.id}/`}
                maxFileCount={1}
                isResumable
            />
            <UserUpdateForm id={user.id} user={user} onSubmit={onSubmit}></UserUpdateForm>
        </View>
    )
}