
import { Tabs, View,Card, Flex, useTheme } from '@aws-amplify/ui-react';
import ProfileCard from './ProfileCard';
import { IUser } from './types';
// @ts-ignore
import UserUpdateForm from '../ui-components/UserUpdateForm.jsx';

type IProps = {
  user: IUser
}
function UserView(props:IProps){
const {user} = props;

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
        <UserUpdateForm id={user?.signInDetails?.loginId} user={user}/>
        </Flex>
      </Card></View>
      </Tabs.Panel>
      <Tabs.Panel value="2"><ProfileCard user={user}/></Tabs.Panel>
    </Tabs.Container>
     
  );
}

export default UserView;
