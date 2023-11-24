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
  var fc = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };
  useEffect(fc, []);
const onChangeIndex = ({index})=>{
  setIndex(index)
}
const [currIndex,setIndex] = useState(0)
  return (
    <View style={styles.container}>
      <SwiperFlatList
        style={{ flex: 1 }}
        vertical={true}
        refreshing={true}
        data={data}
        keyExtractor={(item,index) => {index.toString()}}
        onChangeIndex={onChangeIndex}
        renderItem={({ item,index }) => (
          <View
            key={item.id}
            style={{  }}
          >
            <ReactPlayer
              url={item.link} //
              width={width}
              height={height-40}
              playing={currIndex==index}
              onBuffer={()=>{console.log('buffering')}}
              controls={true}
              loop={true}
            />
            <View style={{ position: "absolute", bottom: 75, justifyContent: "center",right:10}}>
              {/* like button */}
              <TouchableOpacity
                style={{ width: 40, height: 40, margin: 15 }}
                onPress={() => {
                  var link = url + "/" + item.id;
                  fetch(link, {
                    method: "PUT",
                    body: JSON.stringify({
                      likeState: !item.likeState,
                      like:
                        item.likeState == true ? item.like - 1 : item.like + 1,
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
                {item.likeState ? (
                  <Image
                    source={require("../assets/redheart.png")}
                    style={{ width: 40, height: 40 }}
                  ></Image>
                ) : (
                  <Image
                    source={require("../assets/whiteheart.png")}
                    style={{ width: 40, height: 40 }}
                  ></Image>
                )}
                <Text style={{ textAlign: "center", color: "white" }}>
                  {item.like}
                </Text>
              </TouchableOpacity>
              {/* comment button */}
              <TouchableOpacity style={{ width: 40, height: 40, margin: 15 }}>
                <Image
                  source={require("../assets/whitecomment.png")}
                  style={{ width: 38, height: 35 }}
                ></Image>
                <Text style={{ textAlign: "center", color: "white" }}>
                  {item.comment}
                </Text>
              </TouchableOpacity>
              {/* share button */}
              <TouchableOpacity style={{ width: 40, height: 40, margin: 15 }}>
                <Image
                  source={require("../assets/whiteshare.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
                <Text style={{ textAlign: "center", color: "white" }}>
                  {item.share}
                </Text>
              </TouchableOpacity>
              {/* menu button */}
              <TouchableOpacity style={{ width: 40, height: 40, margin: 15 }}>
                <Image
                  source={require("../assets/whitemenu.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{position: "absolute",bottom:30, left:20,flexDirection:'row'}}>
              <Image source={require('../assets/music.png')} style={{width:20,height:20,marginHorizontal:10}}/>
              <Text style={{color:'white', fontSize:15, fontWeight:600}}>{item.music} · Âm thanh gốc</Text>
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
