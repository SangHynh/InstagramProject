import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const url = "https://655e1ce79f1e1093c59a8ac5.mockapi.io/message"; //url tin nhắn
const url2 = "https://654afb8a5b38a59f28ee67ec.mockapi.io/post"; //url story

export default function Message({ navigation, route }) {
  const getLastMessageContent = (user, maxCharacters) => {
    const lastMessage = user.message[user.message.length - 1]; //lấy tin cuối cùng
    if (lastMessage) {
      const content = lastMessage.content;
      return content.length > maxCharacters
        ? `${content.substring(0, maxCharacters)}...`
        : content;
    }
    return "";
  };

  const [data, setData] = useState([]); //data tin nhắn
  const [data2, setData2] = useState([]); //data story

  const fc = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  const fc2 = () => {
    fetch(url2)
      .then((res) => res.json())
      .then((json) => setData2(json));
  };

  useEffect(fc, []);
  useEffect(fc2, []);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.head1}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../amage/back.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <Text style={{ left: 10, fontWeight: "400", fontSize: 20 }}>
            be.dau
          </Text>
        </View>
        <View style={styles.head2}>
          <TouchableOpacity style={{ width: 30, height: 30 }}>
            <Image
              source={require("../amage/videocamera.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 30, height: 30 }}>
            <Image
              source={require("../amage/edit.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.note}>
        <View>
          <TouchableOpacity
            style={{
              width: 65,
              height: 65,
              resizeMode: "cover",
              borderRadius: 70,
              marginHorizontal: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../amage/avatar.png")}
              style={{
                width: 60,
                height: 60,
                resizeMode: "cover",
                borderRadius: 40,
                borderColor: "rgb(230,230,230)",
                borderWidth: 2,
              }}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.41)",
              marginHorizontal: 5,
              marginVertical: 4,
            }}
          >
            Ghi chú của bạn
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={data2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={{
                width: 80,
                justifyContent: "center",
                alignItems: "center",
              }}
              horizontal
            >
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "cover",
                  borderRadius: 70,
                  marginHorizontal: 1,
                  borderColor: "green",
                  borderWidth: 3,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.avatar }}
                  style={{
                    width: 55,
                    height: 55,
                    resizeMode: "cover",
                    borderRadius: 40,
                  }}
                ></Image>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: "rgba(0, 0, 0, 0.6)",
                  marginVertical: 5,
                }}
              >
                {item.userName}
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text style={{ color: "#000", fontSize: 16, fontWeight: 500 }}>
          Tin nhắn
        </Text>
        <Text style={{ color: "#0398FC", fontSize: 14, fontWeight: 400 }}>
          Tin nhắn đang chờ
        </Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => {
                navigation.navigate("ListMess", { user: item });
                var link = url + "/" + item.id;
                fetch(link, {
                  method: "PUT",
                  body: JSON.stringify({
                    isReaded: true,
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
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.avatar }}
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                ></Image>
              </View>
              <View style={{ flex: 5, justifyContent: "center", padding: 15 }}>
                <Text style={ item.isReaded? {fontWeight: '500',fontSize:15,color: "rgba(0, 0, 0, 0.6)"} :{ fontWeight: 'bold',fontSize:15 }}>{item.user}</Text>
                <Text style={item.isReaded? { color: "rgba(0, 0, 0, 0.68)" }:{color:'black', fontWeight:'500'}}>
                  {getLastMessageContent(item, 35)}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/camera.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  head: {
    height: 50,
    flexDirection: "row",
  },
  head1: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    left: 10,
  },
  head2: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  note: {
    width: "100%",
    height: 100,
    flexDirection: "row",
  },
  list: {
    height: height - 50,
  },
  item: {
    width: "auto",
    height: 70,
    backgroundColor: "rgb(250,250,250)",
    margin: 0.5,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
