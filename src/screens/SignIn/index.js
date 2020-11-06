import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import styles from './styles';
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null,
    };
  }
  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '328930296839-ij5tsnou4bhv4slr5ipo4olg5bfh1o0q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
      this.setState({loggedIn: true});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        console.log('ERROROROOR >>> ', error.toString());
        // some other error happened
      }
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
      this.setState({loggedIn: false});
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged = (user) => {
    this.setState({user});
    console.log(user);
    if (user) this.setState({loggedIn: true});
  };

  

  render() {
    const {loggedIn, user} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.diaryIcon}>
              <Image
                style={{width: 300, height: 400}}
                source={{
                  uri:
                    'https://i.pinimg.com/originals/54/43/d3/5443d3ea02b5c15886bba648f353b135.jpg',
                }}
              />
            </View>
            <View style={styles.sectionContainer}>
              {!loggedIn && (
                <GoogleSigninButton
                  style={{width: 192, height: 60}}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this.signIn}
                />
              )}
            </View>
            <View style={styles.buttonContainer}>
              {!user && <Text>You are currently logged out</Text>}
              {user && (
                <View>
                  <Text>Welcome {user.displayName}</Text>
                  <Button
                    onPress={this.signOut}
                    title="LogOut"
                    color="red"/>
                </View>
              )}
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
