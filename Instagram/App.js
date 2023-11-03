import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SplashScreen } from './view/SplashScreen';
import Login from './view/Login';
import SignUp from './view/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp></SignUp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});