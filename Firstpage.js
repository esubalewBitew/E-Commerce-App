import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Aseb.dbs");

const myArr = [1, 2, 3, 4, 5];
function createTable() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS asebaccount (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(50) NOT NULL, phonenumber varchar(50) NOT NULL,email varchar(50)  NOT NULL,city varchar(50),kebele varchar(50),nicknameofvilage varchar(50),class varchar(10),password varchar(100) NOT NULL)",
      [],
      (success) => {
        //al ert("success" + JSON.stringify(success));
      },
      (error) => {
        // alert("error34555" + JSON.stringify(error));
      }
    );
  });
}
function Firstpage({ navigation }) {
  createTable();
  return (
    <View style={styles.LoginView}>
      <Image
        source={require("../assets/aseblogo.jpg")}
        style={{ height: Dimensions.get("screen").height/2.3, width: "50%", resizeMode: "center" ,margin:50}}
      />
     

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => {
            navigation.navigate("Login", [
              { name: "Selemon" },
              { name: "Esubalew Bitewty" },
            ]);
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "500" }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "500" }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Firstpage;
const styles = StyleSheet.create({
  Login: {
    fontSize: 35,
    fontWeight: "700",
    width: "30%",
    marginTop: 40,
    marginBottom: 40,
  },
  LoginView: {
    alignItems: "center",
    backgroundColor:"white",
    height:"100%"
  },
  LoginButton: {
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 2,
    paddingBottom: 5,
  },
  forgotPassword: {
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 2,
    paddingBottom: 5,
  },
  buttonView: {
    width: Dimensions.get("screen").width / 1.8,
    alignItems: "center",
    backgroundColor: "orange",
    margin: 10,
    borderRadius: 15,
  },
});
