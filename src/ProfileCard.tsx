import {
  Card,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
  Image
} from '@aws-amplify/ui-react';
// import {StorageImage} from '@aws-amplify/ui-react-storage';
import {IUser} from './types';


function ProfileCard(user:IUser){
  const { tokens } = useTheme();
  const imagePath = user?.imagePath;
  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
      <Card>
        <Flex direction="column" alignItems="flex-start">
          <Image
            alt="default photo"
            src={imagePath}
            width="33%"
          />
          {/* <StorageImage alt="user profile photo" path={({ identityId }) => `protected/${identityId}/cat.jpg`} fallbackSrc="../assets/avatar.jpg"
      onGetUrlError={(error) => console.error(error)}/>; */}
          <Flex
            direction="column"
            alignItems="flex-start"
            gap={tokens.space.xs}
          >
            <Flex>
              <Badge size="small" variation="info">
                Plus
              </Badge>
              <Badge size="small" variation="success">
                Verified
              </Badge>
            </Flex>

            <Heading level={5}>
              {user.name}
            </Heading>

            <Text as="span">
              {user.bio}
            </Text>
            <Button variation="primary">Like</Button>
          </Flex>
        </Flex>
      </Card>
    </View>
  );
};
export default ProfileCard;