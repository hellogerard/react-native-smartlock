import { NativeModules } from 'react-native';

const { SmartLockRN } = NativeModules;

const smartLock = {};

smartLock.getCredentials = () => {
  return new Promise((resolve, reject) => {
    SmartLockRN.getCredentials()
      .then(data => resolve(JSON.parse(data)))
      .catch(err => reject(err));
  });
}

smartLock.saveCredentials = (name, userIdentifier, password, profilePicture = null) => {
  return new Promise((resolve, reject) => {
    SmartLockRN.saveCredentials(name, userIdentifier, password, profilePicture)
      .then(() => resolve())
      .catch(err => reject(err));
  });
}


export default smartLock;
