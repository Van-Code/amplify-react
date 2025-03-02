
import { Menu, MenuItem, Divider} from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';

function MainMenu() {

  const { signOut } = useAuthenticator();
  
  return (
    <Menu menuAlign="start">
        <MenuItem onClick={() => alert('Download')}>
        Feed
        </MenuItem>
        <MenuItem onClick={() => alert('Create a Copy')}>
        Profile
        </MenuItem>
        <MenuItem onClick={() => alert('Account')}>
        Account
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => signOut()}>
        Logout
        </MenuItem>
    </Menu>
  )
}
  export default MainMenu;