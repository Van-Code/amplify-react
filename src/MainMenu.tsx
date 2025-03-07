
import { Menu, MenuItem, Divider} from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';

function MainMenu() {

  return (
    <Menu menuAlign="start">
        <MenuItem onClick={() => alert('Download')}>
        Feed
        </MenuItem>
        <MenuItem onClick={() => alert('Create a Copy')}>
        Profile
        </MenuItem>
        <MenuItem onClick={() => alert('Mark as Draft')}>
        Mark as Draft
        </MenuItem>
        <Divider />
        <MenuItem isDisabled onClick={() => alert('Delete')}>
        Delete
        </MenuItem>
        <MenuItem onClick={() => signOut}>
        Logout
        </MenuItem>
    </Menu>
  )
}
  export default MainMenu;