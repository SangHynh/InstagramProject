import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function ListMess({ navigation, route }) {
  const [text, setText] = useState('');
  const { user } = route.params;
  const userID = user.id;
  const url = "https://655e1ce79f1e1093c59a8ac5.mockapi.io/message/"+userID;
  const [data, setData] = useState({});
  const fc = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {setData(json);
      console.log(json);});
  };
  useEffect(fc,[]);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "80%" }}
        >
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../amage/back.png")}
              style={{ height: 30, width: 30, marginRight: 15 }}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: data.avatar }}
            style={{ height: 45, width: 45, borderRadius: 50 }}
          />
          <Text
            style={{ color: "#000", fontSize: 20, fontWeight: "600", left: 5 }}
          >
            {data.user}
          </Text>
        </View>
        <View style={styles.headRight}>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Image
              source={require("../amage/call.png")}
              style={{ height: 40, width: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Image
              source={require("../amage/videocallmess.png")}
              style={{ height: 35, width: 35 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data.message}
          keyExtractor={(item) => item.id_Mess}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                marginVertical: 5,
                justifyContent: item.isSender ? "flex-end" : "flex-start",
                marginHorizontal: 10,
              }}
            >
              {item.isSender == false ? (
                <Image
                  source={{ uri: data.avatar }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginHorizontal: 10,
                  }}
                ></Image>
              ) : (
                ""
              )}
              {/* khung tin nhắn */}
              <View
                style={{
                  padding: 15,
                  backgroundColor: item.isSender
                    ? "rgba(102, 38, 237, 0.98)"
                    : "rgb(230,230,230)",
                  flexDirection: "row",
                  borderRadius: 15,
                  flexWrap: "wrap",
                  maxWidth: "70%",
                }}
              >
                <Text
                  style={{
                    color: item.isSender ? "white" : "black",
                  }}
                >
                  {item.content}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.foot}>
        <View style={styles.input}>
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              left: 5,
              width: 40,
              height: 40,
              borderRadius: 25,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../amage/camera.png")}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Nhắn tin..."
            value={text}
            onChangeText={(input) => {
              setText(input);
            }}
            style={{
              height: "100%",
              fontSize: 16,
              fontWeight: 300,
              color: "#686767",
              padding: 20,
              paddingLeft: 60,
              paddingRight: 50,
            }}
          />
          {text == "" ? (
            <View
              style={{
                width: "32%",
                position: "absolute",
                justifyContent: "flex-end",
                flexDirection: "row",
                right: 10,
              }}
            >
              <TouchableOpacity
                style={{ position: "relative", marginHorizontal: 5 }}
              >
                <Image
                  source={require("../amage/micro.png")}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ position: "relative", marginHorizontal: 5 }}
              >
                <Image
                  source={require("../amage/pic.png")}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ position: "relative", marginHorizontal: 5 }}
              >
                <Image
                  source={require("../amage/emoji.png")}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{ position: "absolute", right: 2 }}
              onPress={() => {
                // thêm tin nhắn
                var currentMessages = data.message;
                var newMessage = {
                  isSender: true,
                  content: text,
                };
                var modifiedMessages = [...currentMessages, newMessage];

                fetch(url, {
                  method: "PUT",
                  body: JSON.stringify({
                    message: modifiedMessages,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                  .then((res) => res.json())
                  .then(() => {
                    console.log(data);
                    console.log(user);
                    console.log('sended');
                    fc();
                    setText('');
                  });
              }}
            >
              <Image
                source={require("../amage/send.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    height: 0.1 * height,
    width: "auto",
    borderBottomColor: "#CDCDCD",
    borderBottomWidth: 1,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  headRight: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    height: 0.8 * height,
  },
  foot: {
    height: 0.1 * height,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#F6F6F8",
    border: 1,
    borderRadius: 50,
    justifyContent: "center",
  },
});
