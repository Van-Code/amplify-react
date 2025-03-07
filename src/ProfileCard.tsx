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
import { StorageImage } from  '@aws-amplify/ui-react-storage'
import { IUser } from './types';
import { list } from 'aws-amplify/storage';
import {useState, useEffect} from 'react';

type IProps = {
  user: IUser
}

function ProfileCard(props:IProps){
  const {user} = props;
  const { tokens } = useTheme();

  const [images, setImages] = useState<any[]>([]);

  const getImages = async()=>{

    const result = await list({
      path:  ({identityId}) => `profile-pictures/${identityId}/`,
    });
    if(result){
      setImages(result.items)
    }
  }
 
  useEffect(() => {
    getImages();

  }, []);
  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
      <Card>
        <Flex direction="column" alignItems="flex-start">
          { images.map((image) => (
             <StorageImage  key={image["eTag"]} alt="user profile photo" path={image["path"]} fallbackSrc="profile-pictures/avatar.jpg"
        onGetUrlError={(error) => console.error(error)}/>
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