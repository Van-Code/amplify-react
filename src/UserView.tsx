import { CurrentUserUpdateForm } from '../ui-components';
import { Tabs } from '@aws-amplify/ui-react';
import ProfileCard from './ProfileCard';
import { CurrentUser as User } from './types';

function UserView(user:User) {


  return (
    
    <Tabs.Container defaultValue="1">
      <Tabs.List spacing="equal">
        <Tabs.Item value="1">Update</Tabs.Item>
        <Tabs.Item value="2">View</Tabs.Item>
      </Tabs.List>
      <Tabs.Panel value="1"><CurrentUserUpdateForm id={user?.signInDetails?.loginId} user={user}/></Tabs.Panel>
      <Tabs.Panel value="2"><ProfileCard user={user}/></Tabs.Panel>
    </Tabs.Container>
     
  );
}

export default UserView;
