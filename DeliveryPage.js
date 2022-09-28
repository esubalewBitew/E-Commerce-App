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
  ToastAndroid,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
let Result = [];
const db = SQLite.openDatabase("Aseb.dbs");
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
function createTable() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS `asebcarts` (`imageurl` varchar(100) NOT NULL,`productname` varchar(50) NOT NULL, `price` varchar(50) NOT NULL,`size` varchar(10) NOT NULL,`productid` INTEGER(50),`wherefrom` varchar(10))",
      //"UPDATE accounts SET password='alemu' WHERE username='abebe'",
      //"DELETE from accounts WHERE username = 'abebe'",
      [],
      (success) => {
        // alert("success " + JSON.stringify(success));
      },
      (error) => {
        // alert("error" + JSON.stringify(error));
      }
    );
  });
}
function FeatchOrders() {
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM `aseborders`", [], (_, { rows }) => {
      let datavalue = [];

      //alert(rows._array.length);

      resolve(datavalue);
    });
  }, null);
}
function selectTable() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM `aseborders`", [], (_, { rows }) => {
        resolve(rows._array);
        /*
          for (let index = 0; index < rows._array.length; index++) {
            const element = rows._array[index].username;
          }
    
    
          for (index in rows._array) {
            const element = rows._array[index].username;
          }
    
          let index = 0;
          while (index < rows._array.length) {
            const element = rows._array[index].username;
            index++;
          }
          */
      });
    }, null);
  });
}

async function acceptData() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM `aseborders`", [], (_, { rows }) => {
        let datavalue = [];

        //alert(rows._array.length);
        for (let index = 0; index < rows._array.length; index++) {
          datavalue.push({
            imageurl: rows._array[index].imageurl,
            city: rows._array[index].city,
            kebele: rows._array[index].kebelekkt,
            nickname: rows._array[index].nickname,
            latitude: rows._array[index].latitude,
            longtude: rows._array[index].longtude,
          });
        }
        resolve(datavalue);
      });
    }, null);
  });
}

function Item({
  imageurl,
  city,
  kebele,
  nickname,
  productID,
  latitude,
  longtude,
  onPress,
}) {
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
            <Text style={styles.MyText}>Ordered</Text>
          </View>
          <View style={{ position: "absolute", right: 10, bottom: 6 }}></View>
        </View>
      </View>
    </View>
  );
}

export default function DeliveryPage({ navigation, route }) {
  const [categoryss, setcategoryss] = useState([]);
  useEffect(async () => {
    Result = await acceptData();
    //alert(Result.length)
    setcategoryss(Result);
  });
  createTable();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={categoryss}
          renderItem={({ item }) => (
            <Item
              imageurl={item.imageurl}
              city={item.city}
              kebele={item.kebele}
              nickname={item.nickname}
              productID={item.productid}
              latitude={item.latitude}
              longtude={item.longtude}
              onPress={() =>
                navigation.navigate("DeliverDetail", {
                  city: item.city,
                  kebele: item.kebelekkt,
                  nickname: item.nickname,
                  productID: item.productid,
                  latitude: item.latitude,
                  longtude: item.longtude,
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
    flex: 1,
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
