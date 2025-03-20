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
import { UserStore } from './hooks.js';
import { useContext } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { list } from 'aws-amplify/storage';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledImage = styled(StorageImage)`
  max-width: 400px;
  width:100px;
  height:100px;
  margin: 0 auto;
`;

type IProps = {
  isOwn?: boolean;
}
function ProfileCard(props: IProps) {
  const { user } = useContext(UserStore);
  const { tokens } = useTheme();
  const [images, setImages] = useState<any | string[]>([]);
  const { isOwn } = props;

  const getImages = async () => {
    const result = await list({
      path: () => `profile-pictures/${user.id}/`,
    });

    if (result.items.length > 0) {
      setImages(result.items)
    } else {
      setImages(["profile-pictures/avatar.jpg"])
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
          {images.map((image: string, i: number) => (
            <StyledImage key={i} alt="user profile photo" path={image}
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
              {user.about}
            </Text>
            {!isOwn && (
              <Button variation="primary">Like</Button>
            )}
          </Flex>
        </Flex>
      </Card>
    </View>
  );
};
export default ProfileCard;