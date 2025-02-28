
import { Flex } from '@aws-amplify/ui-react';
import { Image } from '../ui-components';
import {StorageImage} from '@aws-amplify/ui-react-storage';

function ProfileCard(props) {
  const {
    user
  } = props;

  return (
    <Flex direction="column" gap="2rem">
      <Image
        alt="Amplify logo"
        src={user.imagePath ? user.imagePath : "../assets/avatar.jpg"}
        objectFit="initial"
        objectPosition="50% 50%"
        backgroundColor="initial"
        height="75%"
        width="75%"
        opacity="100%"
        onClick={() => alert('📸 Say cheese!')}
      />
      <StorageImage alt="user profile photo" path={user.imagePath} fallbackSrc="../assets/avatar.jpg"
      onGetUrlError={(error) => console.error(error)}/>;
    {user.name}
    <p>{user.bio}</p>
    </Flex>
  );
}

export default ProfileCard;
