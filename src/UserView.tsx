// import { useEffect } from 'react';
import { CurrentUserUpdateForm } from '../ui-components';

import { Tabs, View,Card, Flex, useTheme } from '@aws-amplify/ui-react';
import ProfileCard from './ProfileCard';
import { ICurrentUser } from './types';
// import { getCurrentUser } from 'aws-amplify/auth';

type IProps = {
  currentUser: ICurrentUser
}
function UserView(props:IProps) {
  const {currentUser} = props;

  //  async function fetchUser() {
    
  //   const { username, userId, signInDetails } = await getCurrentUser();
  
  //   console.log("username", username);
  //   console.log("user id", userId);
  //   console.log("sign-in details", signInDetails);
  // }
  // useEffect(() => {
  //  fetchUser()
  // }, []);
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
        <CurrentUserUpdateForm id={currentUser?.signInDetails?.loginId} user={currentUser}/>
        </Flex>
      </Card></View>
      </Tabs.Panel>
      <Tabs.Panel value="2"><ProfileCard user={currentUser}/></Tabs.Panel>
    </Tabs.Container>
     
  );
}

export default UserView;
