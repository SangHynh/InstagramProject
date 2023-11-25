import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";

export default function SignUp({ navigation }) {
  const [passVisible, setPassVisible] = useState(true);
  const url = "https://65612eb8dcd355c08323aca9.mockapi.io/users";
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);
  const fc = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  };
  useEffect(fc, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          source={require("../assets/instagram_logo.png")}
          style={{ width: "auto", height: 80, resizeMode: "contain" }}
        />
        <Text
          style={{
            textAlign: "center",
            color: "#878787",
            marginHorizontal: 15,
            fontSize: 26,
          }}
        >
          Sign up to see photos videos from your friends.
        </Text>
        <Button
          buttonColor="#0398FC"
          mode="contained"
          icon={"facebook"}
          style={{ margin: 15, borderRadius: 10 }}
          onPress={() => console.log(1)}
        >
          <Text style={{ fontSize: 15 }}>Login with Facebook</Text>
        </Button>
        {/* duong thang duoi login --or-- */}
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Phone number or Email"
          onChangeText={(input) => {
            setEmail(input);
          }}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          onChangeText={(input) => {
            setFullName(input);
          }}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="User Name"
          onChangeText={(input) => {
            setUserName(input);
          }}
        ></TextInput>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={passVisible}
            onChangeText={(input) => {
              setPassword(input);
            }}
          ></TextInput>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              position: "absolute",
              right: 30,
              marginTop: 15,
            }}
            onPress={() => {
              setPassVisible(!passVisible);
            }}
          >
            {passVisible ? (
              <Image
                source={require("../assets/invisible.png")}
                style={styles.show_hide}
              ></Image>
            ) : (
              <Image
                source={require("../assets/visible.png")}
                style={styles.show_hide}
              ></Image>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailView}>
        <Text
          style={{
            textAlign: "center",
            color: "#878787",
            fontSize: 15,
          }}
        >
          People who use our service may have uploaded your contact information.
          to Instagram. <Text style={{ color: "#0398FC" }}>Learn more</Text>
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#878787",
            fontSize: 15,
            marginHorizontal: 10,
          }}
        >
          By signing up, you agree to our
          <Text style={{ color: "#0398FC" }}> Term</Text>,
          <Text style={{ color: "#0398FC" }}> Privacy Policy</Text> and
          <Text style={{ color: "#0398FC" }}> Cookies Policy</Text>
        </Text>
        <Button
          buttonColor="#57CBFC"
          mode="contained"
          style={{ margin: 5, marginHorizontal: 13, borderRadius: 10 }}
          onPress={() => {
            fetch(url, {
              method: "POST",
              body: JSON.stringify({
                userName: userName,
                mail: email,
                fullName: fullName,
                password: password,
                numPost: 0,
                numFollower: 0,
                numFollowing: 0,
                bio: "Cựu thiếu nhi",
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((res) => res.json())
              .then(() => {
                fc();
              });
          }}
        >
          <Text style={{ fontSize: 15 }}>Sign up</Text>
        </Button>
      </View>
      <View style={styles.bottomView}>
        {/* Đường thẳng */}
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: StyleSheet.hairlineWidth,
            flexDirection: "row",
            flex: 1,
          }}
        ></View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#878787",
              fontSize: 15,
              fontWeight: 450,
              marginHorizontal: 10,
              marginVertical: 5,
            }}
          >
            Have an account?
            <TouchableOpacity
              style={{ color: "#0398FC", marginTop: 5 }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              {" "}
              Login
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  logoView: {
    flex: 1,
  },
  inputView: {
    marginTop: 10,
    flex: 1.2,
  },
  detailView: {
    flex: 0.5,
  },
  bottomView: {
    flex: 0.3,
    bottom: 0,
  },
  textInput: {
    width: "auto",
    height: 40,
    borderColor: "rgb(200,200,200)",
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 15,
    color: "#878787",
    padding: 15,
  },
  show_hide: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
