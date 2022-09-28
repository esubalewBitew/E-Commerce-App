import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const DATA = [
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "1",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "2",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "3",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/3shoes.jpg"),
    proprtyname: "Vans",
    key: "4",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/4shoes.jpg"),
    proprtyname: "Nike Airforce",
    key: "5",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/5shoes.jpg"),
    proprtyname: "Nike",
    key: "6",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/6shoes.jpg"),
    proprtyname: "ምኒሊክ ቤተ መንግስት",
    key: "7",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/7shoes.jpg"),
    proprtyname: "All star",
    key: "8",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/8shoes.jpg"),
    proprtyname: "Air Max",
    key: "9",
    price: "ETB 250",
  },
  {
    imageURi: require("../assets/9shoes.jpg"),
    proprtyname: "Sandal",
    key: "10",
    price: "ETB 250",
  },
];
function Item({ imageurl, name, price, keyvalue,onPress }) {
  const [Iconname, setIconname] = useState("hearto");
  const [IconColor, setIconColor] = useState("black");
  return (
    <View style={styles.containerList}>
      <View style={styles.listItem}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={imageurl}
            style={{ height: 220, width: "100%", resizeMode: "cover" }}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", flex: 1.2 }}>
          <View>
            <Text style={styles.MyText}>{name}</Text>
            <Text style={styles.MyText}>{price}</Text>
            <Text style={styles.MyText}>Status</Text>
          </View>
          <View style={{ position: "absolute", right: 10, bottom: 6 }}>
           
          </View>
        </View>
      </View>
    </View>
  );
}
export default function SellerPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flex:0.07}}>
        <Text
          style={{
            backgroundColor: "white",
            borderColor: "gray",
            borderWidth: 1,
            color: "black",
            borderRadius: 8,
            paddingStart: 10,
            height:30,
            paddingTop:5,
            alignItems:"center"
          }}
          onPress={() => navigation.navigate("PostProduct")}
        >
          Post Your Product Here
        </Text>
      </TouchableOpacity>
      <View style={{ flex:0.9 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              imageurl={item.imageURi}
              name={item.proprtyname}
              price={item.price}
              keyvalue={item.key}
              onPress={() =>
                navigation.navigate("Detail", {
                  imageURL: item.imageURi,
                  price: item.price,
                  name: item.proprtyname,
                  keyvalue:item.key
                })
              }
            />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    flex:1
  },
  containerList: {
    flex: 1,
    padding: 5,
    width: "100%",
  },
  listItem: {
    height: 300,
    width: "100%",
    marginBottom: 0,
    borderColor: "silver",
    borderWidth: 1,
    borderRadius: 20,
    padding: 6,
  },
  MyText: {
    flex: 0.8,
    paddingStart: 5,
    paddingTop: 0,
    fontSize: 20,
  },
});
