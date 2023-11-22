
import { StyleSheet, View } from 'react-native';
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

