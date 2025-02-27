import { UserUpdateForm } from '../ui-components';
import { Tabs } from '@aws-amplify/ui-react';
import {ProfileCard} from './ProfileCard';

function UserView(props) {
  const {
    currentUser
  } = props;


  return (
    
    <Tabs.Container defaultValue="1">
      <Tabs.List spacing="equal">
        <Tabs.Item value="1">Update</Tabs.Item>
        <Tabs.Item value="2">View</Tabs.Item>
      </Tabs.List>
      <Tabs.Panel value="1"><UserUpdateForm id={currentUser?.signInDetails?.loginId} user={currentUser}/></Tabs.Panel>
      <Tabs.Panel value="2"><ProfileCard currentUser={currentUser}/></Tabs.Panel>
    </Tabs.Container>
     
  );
}

export default UserView;
