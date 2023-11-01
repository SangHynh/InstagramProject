import { StyleSheet, Text, View, Image } from "react-native";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.center}>
        <Image source={require("../assets/logoIG.png")} style={styles.logo} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.text}>from</Text>
        <Image
          source={require("../assets/icon_meta.png")}
          style={styles.metaLogo}
        />
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
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  metaLogo: {
    width: 250,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 35,
    color: "gray",
    fontFamily: "Helvetica",
    fontWeight: "200",
  },
});
