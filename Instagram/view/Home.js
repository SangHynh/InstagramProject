import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const url = "https://654afb8a5b38a59f28ee67ec.mockapi.io/post";

export default function Home({ navigation }) {
  const [postData, setPostData] = useState([]);
  const fc = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPostData(json);
      });
  };

  useEffect(fc, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image
          source={require("../assets/instagram_logo.png")}
          style={{ width: "50%", height: "90%", resizeMode: "contain" }}
        ></Image>
        <View style={{ width: "30%", flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 32,
              height: 32,
              resizeMode: "contain",
              marginVertical: 15,
              marginHorizontal: 10,
            }}
          >
            <Image
              source={require("../assets/heart.png")}
              style={{
                width: 32,
                height: 32,
                resizeMode: "contain",
              }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
              marginVertical: 15,
              marginHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate("Message");
            }}
          >
            <Image
              source={require("../assets/message.png")}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.storyView}>
        <View>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
              borderRadius: 60,
              marginHorizontal: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/yourStory.png")}
              style={{
                width: 55,
                height: 55,
                resizeMode: "cover",
                borderRadius: 40,
              }}
            ></Image>
          </TouchableOpacity>
          <Text style={{ textAlign: "center" }}>Tin của bạn</Text>
        </View>
        <FlatList
          horizontal={true}
          data={postData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.storyContainer}>
              <View>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: "cover",
                    borderRadius: 55,
                    marginHorizontal: 15,
                    borderColor: "green",
                    borderWidth: 3,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.avatar }}
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: "cover",
                      borderRadius: 40,
                    }}
                  ></Image>
                </TouchableOpacity>
                <Text
                  style={{ textAlign: "center", color: "rgb(100,100,100)" }}
                >
                  {item.userName}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.postView}>
        <FlatList
          style={{
            height: 600,
          }}
          data={postData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.postContainer}>
              <View style={styles.headerPost}>
                <Image
                  source={{ uri: item.avatar }}
                  style={{
                    width: 50,
                    height: 50,
                    marginVertical: 1,
                    marginHorizontal: 1,
                    borderRadius: 30,
                    resizeMode: "contain",
                  }}
                />
                <Text
                  style={{ flex: 4, margin: 15, fontSize: 18, fontWeight: 500 }}
                >
                  {item.userName}
                </Text>
                <TouchableOpacity
                  style={{
                    flex: 0.5,
                    width: 30,
                    height: 30,
                    marginVertical: 10,
                  }}
                >
                  <Image
                    source={require("../assets/menu.png")}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: "contain",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.imagePost}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "auto", height: 450, resizeMode: "cover" }}
                ></Image>
              </View>

              <View style={styles.reactPost}>
                <TouchableOpacity
                  key={item.id}
                  style={{ width: 35, height: 35, marginRight: 20 }}
                  onPress={() => {
                    var link = url + "/" + item.id;
                    fetch(link, {
                      method: "PUT",
                      body: JSON.stringify({
                        isLiked: !item.isLiked,
                        like: item.isLiked==true ? item.like-1:item.like+1
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
                  {item.isLiked ? (
                    <Image
                      source={require("../assets/redheart.png")}
                      style={{ width: 32, height: 32, resizeMode: "contain" }}
                    ></Image>
                  ) : (
                    <Image
                      source={require("../assets/heart.png")}
                      style={{ width: 32, height: 32, resizeMode: "contain" }}
                    ></Image>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ width: 35, height: 35, marginRight: 20 }}
                >
                  <Image
                    source={require("../assets/comment.png")}
                    style={{ width: 32, height: 32, resizeMode: "contain" }}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ width: 35, height: 35, marginRight: 15 }}
                >
                  <Image
                    source={require("../assets/share.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "500",
                    marginHorizontal: 10,
                  }}
                >
                  {item.like} lượt thích
                </Text>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>{item.userName}</Text>
                  <Text style={{ marginHorizontal: 10, color: "gray" }}>
                    {item.text}...
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 10,
                      color: "rgba(52, 136, 235, 0.65)",
                    }}
                  >
                    #{item.hashtag}
                  </Text>
                </View>
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  storyView: {
    flex: 2,
    flexDirection: "row",
  },
  postView: {
    flex: 11,
  },
  postContainer: {
    height: 630,
    width: "auto",
    margin: 1,
    borderColor: "rgb(230,230,230)",
    borderWidth: 1,
    padding: 0.5,
  },
  headerPost: {
    height: 60,
    flexDirection: "row",
    position: "relative",
  },
  imagePost: {
    width: "auto",
    height: 450,
  },
  reactPost: {
    width: "auto",
    height: 40,
    flexDirection: "row",
    margin: 3,
    padding: 5,
  },
  commentPost: {
    width: "auto",
    height: 10,
  },
  storyContainer: {
    marginTop: 6,
  },
});
