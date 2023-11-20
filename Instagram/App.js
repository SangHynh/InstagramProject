
import { StyleSheet, View, Text } from 'react-native';
import { SplashScreen } from './view/SplashScreen';
import Login from './view/Login';
import Search from './view/Search';
import Profile from './view/Profile';
import Message from './view/Message';
import ListMess from './view/ListMess';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Login ></Login> */}
      {/* <SplashScreen style={styles.splashScreen}></SplashScreen> */}
      {/* <Search/> */}
      {/* <Profile/> */}
      {/* <Message /> */}
      <ListMess/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});