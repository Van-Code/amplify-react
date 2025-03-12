import {
  Card,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from '@aws-amplify/ui-react';
import { IUser } from './types';
import { StorageImage } from '@aws-amplify/ui-react-storage'
import { list } from 'aws-amplify/storage';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledImage = styled(StorageImage)`
  max-width: 400px;
`;
type IProps = {
  user: IUser
}

function ProfileCard(props: IProps) {
  const { user } = props;
  // const user = useContext(UserStore);
  // console.log("update", user)

  const { tokens } = useTheme();
  const [images, setImages] = useState<any[]>([]);

  const getImages = async () => {
    const result = await list({
      path: ({ identityId }) => `profile-pictures/${identityId}/${user.id}`,
    });
    if (result) {
      setImages(result.items)
    }
  }

  useEffect(() => {
    if (user.email) {
      getImages();
    }
  }, []);

  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
      <Card>
        <Flex direction="column" alignItems="flex-start">
          {images.map((image) => (
            <StyledImage key={image["eTag"]} alt="user profile photo" path={image["path"]} fallbackSrc="profile-pictures/avatar.jpg"
              onGetUrlError={(error) => console.error(error)} />
          ))}
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
              {user.profile}
            </Text>
            <Button variation="primary">Like</Button>
          </Flex>
        </Flex>
      </Card>
    </View>
  );
};
export default ProfileCard;