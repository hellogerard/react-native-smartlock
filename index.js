import { NativeModules } from 'react-native';

const { SmartLockRN } = NativeModules;

const smartLock = {
  getCredentials () {
    return SmartLockRN.getCredentials()
      .then(JSON.parse)
  },
  saveCredentials (options) {
    const {
      name,
      password,
      userIdentifier,
      profilePicture = null,
      forceEnableSaveDialog = false
    } = options

    return SmartLockRN.saveCredentials(
      name,
      userIdentifier,
      password,
      profilePicture,
      forceEnableSaveDialog
    )
  }
};

export default smartLock;
