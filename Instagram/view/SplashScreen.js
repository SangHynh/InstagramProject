import { StyleSheet, Text, View, Image } from "react-native";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.center}>
        <Image source={require("../assets/logoIG.png")} style={styles.logo} />
      </View>
      <View style={styles.bottom}>
        <Text>Meta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
  },
  center: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
