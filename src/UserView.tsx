import { UserUpdateForm } from '../ui-components';
import { Tabs, View,Card, Flex, useTheme } from '@aws-amplify/ui-react';
import ProfileCard from './ProfileCard';

type IProps = {
  loginId: string
}
function UserView(props:IProps) {

  const { tokens } = useTheme();

  const initialValues = {
    name: "",
    email: props.loginId,
    bio: "",
    birthdate: "",
  };

  const user = initialValues;
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
        <UserUpdateForm id={props.loginId} />
        </Flex>
      </Card></View>
      </Tabs.Panel>
      <Tabs.Panel value="2"><ProfileCard {...user}/></Tabs.Panel>
    </Tabs.Container>
     
  );
}

export default UserView;
