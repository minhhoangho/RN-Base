// import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';

// const APP_CONFIG = {
//   SERVER_URL: Config.SERVER_URL
// };

const transformerConfig = {
  whitelistPerReducer: {
    login: ['data', 'token'],
    app: ['language'],
  },
  blacklistPerReducer: {},
};

export const REDUX_PERSIST = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: ['loadingReducer'],
  debug: true,
};

// export default APP_CONFIG;
