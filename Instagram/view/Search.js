import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("window").height;

var url = "https://6545ad6bfe036a2fa954ab4d.mockapi.io/imageig";

export default function Search() {
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* <View style={{  position:"sticky", top:0, zIndex: 2, justifyContent: 'center', alignItems: 'center' }} > */}

      <View
        style={{
          backgroundColor: "#E7E7E7B5",
          borderRadius: 10,
          flexDirection: "row",
          margin: 10,
        }}
      >
        <Image
          style={{
            width: 20,
            height: 20,
            left: 10,
            marginTop: 5,
            position: "absolute",
          }}
          source={require("../amage/search.png")}
        ></Image>
        <TextInput
          style={{
            maxHeight: "100%",
            width: "100%",
            paddingLeft: 80,
            fontSize: 20,
          }}
          placeholder="Tìm kiếm"
        ></TextInput>
      </View>
      {/* </View> */}

      {/* giua man hinh */}
      <View style={{}}>
        <FlatList
          style={{ height: screenHeight - 20 }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View key={item.id}>
              {console.log(item.id)}
              <Image
                source={{ uri: item.pic }}
                style={{
                  width: screenWidth / 3,
                  height: 150,
                  marginVertical: 1,
                  marginHorizontal: 1,
                  resizeMode: "cover",
                }}
              ></Image>
            </View>
          )}
        ></FlatList>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
