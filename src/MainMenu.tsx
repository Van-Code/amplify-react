import { Menu, MenuItem, Divider } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';

function MainMenu() {

  return (
    <Menu menuAlign="start">
      <MenuItem>
        <Link to="/discover">
          Discover
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/account">
          Account
        </Link>
      </MenuItem>

      <Divider />
      <MenuItem onClick={() => signOut()}>
        Logout
      </MenuItem>
    </Menu>
  )
}
export default MainMenu;