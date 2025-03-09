import { Tabs, View,Card, Flex, useTheme } from '@aws-amplify/ui-react';
import ProfileCard from './ProfileCard';
import UpdateProfile from './UpdateProfile.js';
// @ts-ignore
import UserUpdateForm from '../ui-components/UserUpdateForm.jsx';


function UserView(){
  const { tokens } = useTheme();

  return (
    <Tabs.Container defaultValue="1">
      <Tabs.List spacing="equal">
        <Tabs.Item value="1">Update</Tabs.Item>
        <Tabs.Item value="2">View</Tabs.Item>
      </Tabs.List>
      <Tabs.Panel value="1"><View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    ><Card>
      <Flex direction="column" alignItems="flex-start">
        <UpdateProfile/>

        </Flex>
      </Card></View>
      </Tabs.Panel>
      <Tabs.Panel value="2"><ProfileCard /></Tabs.Panel>
    </Tabs.Container>
     
  );
}

export default UserView;
