import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Womenshoes from "../Screens/Womenshoes";
import Ionicons from "react-native-vector-icons/Ionicons";
import KidShoes from "../Screens/KidShoes";

import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ToastAndroid,
} from "react-native";

import Category2 from "./Explore/Category2";
import { AntDesign } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Aseb.dbs");

function FeatchOrders() {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM `postproduct` WHERE category='shoes'AND scategory='Men'",
      [],
      (_, { rows }) => {
        //resolve(rows._array);
        alert(rows._array.length);
        for (let index = 0; index < rows._array.length; index++) {
          // alert( rows._array[index].productid);
        }

        for (index in rows._array) {
          const element = rows._array[index].username;
        }

        let index = 0;
        while (index < rows._array.length) {
          const element = rows._array[index].username;
          index++;
        }
      }
    );
  }, null);
}

function createTable() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS `asebcarts` (`imageurl` varchar(100) NOT NULL,`productname` varchar(50) NOT NULL, `price` varchar(50) NOT NULL,`size` varchar(10) NOT NULL,`productid` INTEGER(50),`wherefrom` varchar(10))",
      //"UPDATE accounts SET password='alemu' WHERE username='abebe'",
      //"DELETE from accounts WHERE username = 'abebe'",
      [],
      (success) => {
        //alert("success " + JSON.stringify(success));
      },
      (error) => {
        //alert("error" + JSON.stringify(error));
      }
    );
  });
}
function deletTable(productID) {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE from asebcarts WHERE productid ='" + productID + "'",
      [],
      (success) => {
        ToastAndroid.show("Deleted fro carts", ToastAndroid.SHORT);
      },
      (e) => {
        ToastAndroid.show("Error, While delete from cart ", ToastAndroid.SHORT);
      }
    );
  }, null);
}

function insertTable(data) {
  if (
    data.pn != "" &&
    data.iu != "" &&
    data.pr != "" &&
    data.sz != "" &&
    data.pd != ""
  ) {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO `asebcarts`(`imageurl`,`productname`,`price`,`size`,`productid`,`wherefrom`) VALUES(?,?,?,?,?,?);COMMIT;",
        [data.iu, data.pn, data.pr, data.sz, data.pd, "Local"],
        (success) => {
          // alert("Added to cart")
          ToastAndroid.show("Added to cart", ToastAndroid.SHORT);
        },
        (e) => {
          ToastAndroid.show("Error, While added to carts", ToastAndroid.SHORT);
        }
      );
    }, null);
  } else {
    alert("Please fill out all forms carefully");
  }
}
const Tab = createMaterialTopTabNavigator();
const Menname = "Men";
const Womenname = "Women";
const Kidname = "Kid";
let iconName;
const DATA56 = [
  {
    imageURi: require("../assets/women1.jpg"),
    proprtyname: "Black Hill",
    key: "80",
    price: "ETB 6500",
    description: "Best fit with",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/women2.jpg"),
    proprtyname: "Hili",
    key: "81",
    price: "ETB 7500",
    description: "Best fit with",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/women3.jpg"),
    proprtyname: "Adidas",
    key: "82",
    price: "ETB 8200",
    description: "Best fit with",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/women4.jpg"),
    proprtyname: "Red shirt",
    key: "83",
    price: "ETB 8300",
    description: "Best fit with",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/women5.jpg"),
    proprtyname: "Sport",
    key: "84",
    price: "ETB 8400",
    description: "Best fit with",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/women6.jpg"),
    proprtyname: "culture scurt",
    key: "85",
    price: "ETB 8500",
    description: "Best fit with",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/women7.jpg"),
    proprtyname: "Minisuit",
    key: "86",
    price: "ETB 8790",
    description: "Best fit with",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/women8.jpg"),
    proprtyname: "Leather",
    key: "87",
    price: "ETB 6800",
    description: "Best fit with",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
];
const DATAM = [
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "25",
    price: 800,
    description: "Best fit with..cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "26",
    price: 500,
    description: "Best fit with...cloth",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/3shoes.jpg"),
    proprtyname: "Blue Vans",
    key: "27",
    price: 500,
    description: "Best fit with...cloth",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/4shoes.jpg"),
    proprtyname: "Nike",
    key: "28",
    price: 500,
    description: "Best fit with...cloth",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/5shoes.jpg"),
    proprtyname: "Nike",
    key: "29",
    price: 590,
    description: "Best fit with...cloth",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/6shoes.jpg"),
    proprtyname: "All Star",
    key: "30",
    price: 200,
    description: "Best fit with...cloth",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/7shoes.jpg"),
    proprtyname: "Leather",
    key: "31",
    price: 500,
    description: "Best fit with...cloth",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/8shoes.jpg"),
    proprtyname: "Air Force",
    key: "32",
    price: 600,
    description: "Best fit with...cloth",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
];

function Item({ imageurl, name, price, keyvalue, whereFrom, onPress }) {
  const [Iconname, setIconname] = useState("hearto");
  const [IconColor, setIconColor] = useState("black");
  return (
    <View style={style.containerList}>
      <View style={style.listItem}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={imageurl}
            style={{ height: 150, width: "90%", resizeMode: "cover" }}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <View>
            <Text style={style.MyText}>{name}</Text>
            <Text style={style.MyText}>{price}</Text>
          </View>
          <View style={{ position: "absolute", right: 10, bottom: 6 }}>
            <AntDesign
              name={Iconname}
              size={20}
              color={IconColor}
              onPress={() => {
                if (Iconname == "hearto") {
                  insertTable({
                    iu: imageurl,
                    pn: name,
                    pr: price,
                    sz: 40,
                    pd: keyvalue,
                  });
                  //alert(keyvalue + " "+name+" "+price+" "+imageurl)
                  //FeatchOrders();
                } else {
                  deletTable(keyvalue);
                }
                setIconname(Iconname == "hearto" ? "heart" : "hearto");
                setIconColor(IconColor == "black" ? "red" : "black");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function ListShoess({ navigation }) {
  const [Bgmen, setBgmen] = useState("orange");
  const [Bgwomen, setBgwomen] = useState("white");
  const [Bgkid, setBgkid] = useState("white");
  const [TXmen, setTXmen] = useState("white");
  const [TXwomen, setTXwomen] = useState("Black");
  const [TXkid, setTXkid] = useState("black");
  return (
    <View style={style.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          data={DATAM}
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
                  productID: item.key,
                })
              }
            />
          )}
        />
      </View>
    </View>
  );
}

function Shoes({ navigation }) {
  createTable();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "gray",
        labelStyle: { paddingBottom: 5, fontSize: 15 },
        style: { backgroundcolor: "orange" },
      }}
    >
      <Tab.Screen name="Men" component={ListShoess} />
      <Tab.Screen name="Women" component={Womenshoes} />
      <Tab.Screen name="Kid" component={KidShoes} />
    </Tab.Navigator>
  );
}
export default Shoes;

const style = StyleSheet.create({
  containerList: {
    flex: 1,
    padding: 5,
    width: "47%",
  },
  Top: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    marginStart: 0,
  },
  listItem: {
    height: 200,
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
  container: {
    flex: 1,
    marginBottom: 10,
  },
});
