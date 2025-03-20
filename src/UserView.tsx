
import { Tabs, View, Card, Flex, useTheme } from '@aws-amplify/ui-react';
import ProfileCard from './ProfileCard';
import UpdateProfile from './UpdateProfile.js';
// @ts-ignore
import UserUpdateForm from './components/UserUpdateForm.js';


function UserView() {
  const { tokens } = useTheme();

  return (
    <Tabs.Container defaultValue="1">
      <Tabs.List spacing="equal">
        <Tabs.Item value="1">Update</Tabs.Item>
        <Tabs.Item value="2">Preview</Tabs.Item>
      </Tabs.List>
      <Tabs.Panel value="1"><View
        backgroundColor={tokens.colors.background.secondary}
        padding={tokens.space.medium}
      ><Card>
          <Flex direction="row" alignItems="flex-start">
            <UpdateProfile />
          </Flex>
        </Card></View>
      </Tabs.Panel>
      <Tabs.Panel value="2"><ProfileCard isOwn={true} /></Tabs.Panel>
    </Tabs.Container>

  );
}

export default UserView;
