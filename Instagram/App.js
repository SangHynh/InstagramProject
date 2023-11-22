import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SplashScreen } from './view/SplashScreen';
import Login from './view/Login';
import SignUp from './view/SignUp';
import Home from './view/Home';
import Reels from './view/Reels';
import ListMess from './view/ListMess';
import Root from './view/Root';

export default function App() {
  return (
    <View style={styles.container}>
      <Root></Root>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

