import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

export default function Profile({ navigation, route }) {
  const url = "https://6560f18183aba11d99d1bb07.mockapi.io/profilePic";
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("window").height;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <View style={styles.container}>
      {/* view dau */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 0.1 * screenHeight,
        }}
      >
        <View
          style={{
            width: "90%",
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "75%",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>be.dau_ </Text>
            <Image
              style={{ width: 15, height: 15, marginTop: 5 }}
              source={require("../amage/down.png")}
            ></Image>
          </View>
          <View
            style={{
              width: "25%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              justifyContent: "space-around",
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../amage/plus.png")}
            />
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../amage/menu.png")}
            />
          </View>
        </View>
      </View>

      {/* giua man hinh */}
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: "35%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 80, height: 80 }}
            source={require("../amage/avatar.png")}
          />
          <View style={{ alignItems: "center", flexWrap: "" }}>
            <Text style={{ fontWeight: "bold" }}>ke si tinh</Text>
          </View>
        </View>
        <View
          style={{
            width: "65%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "900" }}>9</Text>
            <Text>Bài viết</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "900" }}>10.156</Text>
            <Text>Đang theo dõi</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontWeight: "900" }}>2</Text>
            <Text>Người theo dõi</Text>
          </View>
        </View>
      </View>
      {/* view chinh sua trang ca nhan */}
      <View
        style={{
          justifyContent: "space-between",
          alignContent: "center",
          flexDirection: "row",
          top: 5,
          marginHorizontal: 5,
        }}
      >
        <TouchableOpacity
          style={{
            width: "45%",
            height: 40,
            backgroundColor: "#EFEFEF",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "300" }}>Chỉnh sửa trang cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "45%",
            height: 40,
            backgroundColor: "#EFEFEF",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "300" }}>Chia sẻ trang cá nhân</Text>
        </TouchableOpacity>
        <View
          style={{
            width: "8%",
            height: 40,
            backgroundColor: "#EFEFEF",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            padding: 5,
          }}
        >
          <TouchableOpacity style={{ height: 24, width: 24 }}>
            <Image
              source={require("../amage/invite.png")}
              style={{ height: 24, width: 24, fontWeight: "500" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* view flatlist */}
      <View
        
      >
        <View style={{
          marginVertical: 15,
          flexDirection: "row",
          justifyContent: "space-around",
        }}><TouchableOpacity>
          <Image
            source={require("../amage/grid.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../amage/user-profile.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity></View>

        <FlatList
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
