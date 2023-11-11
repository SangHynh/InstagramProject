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

export default function Home() {
  const [postData, setPostData] = useState([]);
  const [like, setLike] = useState(false);

  const handleClick = (itemLiked) => {
    setLike(!like);
    console.log(itemLiked.id);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPostData(json);
        console.log(json);
      });
  }, []);

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
        <TouchableOpacity
          style={{
            width: 65,
            height: 65,
            resizeMode: "cover",
            borderRadius: 70,
            marginHorizontal: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/yourStory.png")}
            style={{
              width: 65,
              height: 65,
              resizeMode: "cover",
              borderRadius: 40,
            }}
          ></Image>
        </TouchableOpacity>
        <FlatList
          horizontal={true}
          data={postData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.storyContainer} horizontal>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "cover",
                  borderRadius: 70,
                  marginHorizontal: 5,
                  borderColor: "green",
                  borderWidth: 3,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.avatar }}
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: "cover",
                    borderRadius: 40,
                  }}
                ></Image>
              </TouchableOpacity>
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
                    width: 55,
                    height: 55,
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
                    handleClick(item);
                  }}
                >
                  {like ? (
                    <Image
                      source={require("../assets/redheart.png")}
                      style={{ width: 32, height: 32, resizeMode: "contain" }}
                    ></Image>
                  ) : (
                    <Image
                      source={require("../assets/heart.png")}
                      style={{ width: 30, height: 30, resizeMode: "contain" }}
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
    flex: 1.5,
    flexDirection: 'row'
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
  storyContainer: {},
});
