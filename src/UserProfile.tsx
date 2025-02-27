
import { Flex } from '@aws-amplify/ui-react';
import { Image } from '../ui-components';

function ProfileCard(props) {
  const {
    user
  } = props;

  return (
    <Flex direction="column" gap="2rem">
      <Image
        alt="Amplify logo"
        src="/amplify-logo.svg"
        objectFit="initial"
        objectPosition="50% 50%"
        backgroundColor="initial"
        height="75%"
        width="75%"
        opacity="100%"
        onClick={() => alert('📸 Say cheese!')}
      />
    {user.name}
    <p>{user.bio}</p>
    </Flex>
  );
}

export default ProfileCard;
