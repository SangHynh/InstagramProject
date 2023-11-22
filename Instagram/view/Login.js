import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import { Button } from "react-native-paper";

// Logo View
// Input View
// Button View
// Facebook View
// Signup View

export default function Login({navigation}) {
  const [passVisiable, setPassVisiable] = useState(true);
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5 }}> </View>
      <View style={styles.logoView}>
        <Image
          source={require("../assets/instagram_logo.png")}
          style={styles.logo}
        />
      </View>
      <View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Phone number, user name or email"
            placeholderTextColor={"gray"}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={"gray"}
            style={styles.textInput}
            secureTextEntry={passVisiable}
          />
          <TouchableOpacity
            onPress={() => {
              setPassVisiable(!passVisiable);
            }}
            style={{
              width: 25,
              height: 25,
              position: "absolute",
              right: 20,
              marginTop: 20,
            }}
          >
            {passVisiable ? (
              <Image
                source={require("../assets/invisible.png")}
                style={styles.show_hide}
              />
            ) : (
              <Image
                source={require("../assets/visible.png")}
                style={styles.show_hide}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Text style={styles.forgotPassword}> Forgot password ? </Text>
        <Button
          buttonColor="#57CBFC"
          mode="contained"
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home')
          }}
        >
          <Text style={{ fontSize: 15 }}>Login</Text>
        </Button>
        {/* duong thang duoi login --or-- */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              marginLeft: 15,
              height: 1,
              backgroundColor: "gray",
            }}
          />
          <View>
            <Text style={{ width: 40, textAlign: "center", color: "#868383" }}>
              OR
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginRight: 15,
              height: 1,
              backgroundColor: "gray",
            }}
          />
        </View>
        {/* end*/}
      </View>
      <View style={styles.fbView}>
        <Button
          icon="facebook"
          buttonColor="transparent"
          mode="text"
          onPress={() => console.log("Pressed")}
          textColor="#0A98E8"
        >
          <Text>Continue with Facebook</Text>
        </Button>
        <View
          style={{
            flex: 0.9,
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            flexDirection: "row",
          }}
        ></View>
      </View>
      <View style={styles.signUpView}>
        <Text style={{ margin: 10 }}>Don’t have an account?</Text>
        <Text style={{ color: "#0A98E8", fontWeight: "500" }}>Sign Up</Text>
      </View>
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
  logoView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px",
  },
  buttonView: {
    flex: 1,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#2596D6",
    margin: 14,
    fontWeight: "600",
  },
  button: {
    borderRadius: 5,
    margin: 14,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  textInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  fbView: {
    flex: 1,
  },
  signUpView: {
    flex: 0.25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  show_hide: {
    width: 25,
    height: 25,
    position: "absolute",
  }
});
