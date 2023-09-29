import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { SplashScreen } from './view/SplashScreen';
import Login from './view/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login ></Login>
      {/* <SplashScreen style={styles.splashScreen}></SplashScreen> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});