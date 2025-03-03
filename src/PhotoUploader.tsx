import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';

function PhotoUploader(){  
    return (
        <FileUploader
        acceptedFileTypes={['image/*']}
        path={({identityId}) => `profile-pictures/${identityId}/`}
        maxFileCount={3}
        isResumable
        displayText={{
          dropFilesText: '',
          browseFilesText: '+'}}
          
      ></FileUploader>
    )
}


export default PhotoUploader;
