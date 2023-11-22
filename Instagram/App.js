import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SplashScreen } from './view/SplashScreen';
import Login from './view/Login';
import SignUp from './view/SignUp';
import Home from './view/Home';
import Api from './view/Api';
import Reels from './view/Reels';

export default function App() {
  return (
    <View style={styles.container}>
      <Reels></Reels>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});