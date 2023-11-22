import React, { useEffect, useState } from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import ReactPlayer from "react-player";

const url = "https://655c11cfab37729791a9ca71.mockapi.io/reel";

export default function Reels() {
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <View style={styles.container}>
      <SwiperFlatList
        style={{ flex: 1 }}
        showPagination
        refreshing={true}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={{ alignItems: "flex-end", justifyContent: "center" }}
          >
            <ReactPlayer
              url={item.link} //
              width={width}
              height={height}
              playing={true}
              controls={true}
              loop={true}
              muted={true}
              pip={false}
            />
            <View style={{ position: "absolute", marginTop:200 }}>
              {/* like button */}
              <TouchableOpacity style={{ width: 40, height: 40, margin: 15 }}>
                <Image
                  source={require("../assets/whiteheart.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </TouchableOpacity>
              {/* comment button */}
              <TouchableOpacity style={{ width: 40, height: 40, margin: 15 }}>
                <Image
                  source={require("../assets/whitecomment.png")}
                  style={{ width: 38, height: 35 }}
                ></Image>
              </TouchableOpacity>
              {/* share button */}
              <TouchableOpacity style={{ width: 40, height: 40, margin: 15 }}>
                <Image
                  source={require("../assets/whiteshare.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </TouchableOpacity>
              {/* menu button */}
              <TouchableOpacity style={{ width: 40, height: 40, margin: 15 }}>
                <Image
                  source={require("../assets/whitemenu.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        )}
      ></SwiperFlatList>
    </View>
  );
}

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1 },
});
