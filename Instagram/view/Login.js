import { StatusBar ,} from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Pressable,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5 }}></View>
      <View style={styles.center}>
        <Image source={require("../assets/logoIG.png")} style={styles.logo} />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Phone number, user name or email"
          style={{
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 20,
            padding: 10,
            borderRadius: 5,
          }}

          // onChangeText={onChangeText}
        />
        <TextInput
          placeholder="Password"
          style={{
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => this.setState({ input: text })}
        />
      </View>
      <View>
        <Text style={styles.forgot}>Forgot password?</Text>
        <Pressable onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}</Pressable>
      </View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    flex: 1,
    width: 180,
    height: 60,
    resizeMode: "contain",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    margin: "10px",
  },
  forgot: {
    textAlign: "right",
    color: "#2596D6",
    margin: 14,
    fontWeight: "600",
  },
  button: {
    width: 328,
    height: 37,
    color : '#57CBFC'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  }
});
