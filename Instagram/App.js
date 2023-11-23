
import { StyleSheet, View } from 'react-native';
import Root from './view/Root';
import Message from './view/Message'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Root></Root> */}
      <Message></Message>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

