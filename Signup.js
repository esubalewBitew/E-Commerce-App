import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Aseb.dbs");

const DATA = [
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "1",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "2",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "3",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "4",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "5",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "6",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "7",
    price:250,
    description: "Best fit with...cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/12image.jpg"),
    proprtyname: "Torshin",
    key: "8",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Men",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "9",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Women",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "10",
    price: 450,
    description: "Best fit with...cloths",
    scategory: "Women",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "11",
    price: 150,
    description: "Best fit with...cloths",
    scategory: "Women",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "12",
    price:250,
    description: "Best fit with...cloths",
    scategory: "Women",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "13",
    price:270,
    description: "Best fit with...cloths",
    scategory: "Women",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "14",
    price: 450,
    description: "Best fit with...cloths",
    scategory: "Women",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "15",
    price: 850,
    description: "Best fit with...cloths",
    scategory: "Women",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1shoes.jpg"),
    proprtyname: "Boots",
    key: "16",
    price: 650,
    description: "Best fit with...cloths",
    scategory: "Women",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "17",
    price: 550,
    description: "Best fit with...cloths",
    scategory: "Kids",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "18",
    price: 250,
    description: "Best fit with...cloths",
    scategory: "Kids",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "19",
    price: 650,
    description: "Best fit with...cloths",
    scategory: "Kids",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "20",
    price: 650,
    description: "Best fit with...cloths",
    scategory: "Kids",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "21",
    price: 650,
    description: "Best fit with...cloths",
    scategory: "Kids",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "22",
    price: 650,
    description: "Best fit with...cloths",
    scategory: "Kids",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "23",
    price: 1650,
    description: "Best fit with...cloths",
    scategory: "Kids",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2shoes.jpg"),
    proprtyname: "Vans",
    key: "24",
    price: 750,
    description: "Best fit with...cloths",
    scategory: "Kids",
    category: "shoes",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/Laurent.jpg"),
    proprtyname: "Saint Laurent",
    key: "25",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Men",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/Laurent.jpg"),
    proprtyname: "Saint Laurent",
    key: "26",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Men",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/Laurent.jpg"),
    proprtyname: "Saint Laurent",
    key: "27",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Men",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/Laurent.jpg"),
    proprtyname: "Saint Laurent",
    key: "28",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Men",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/Laurent.jpg"),
    proprtyname: "Saint Laurent",
    key: "29",
    price: 65,
    description: "Best fit with...shoes",
    scategory: "Men",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/Laurent.jpg"),
    proprtyname: "Saint Laurent",
    key: "30",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Men",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/Laurent.jpg"),
    proprtyname: "Saint Laurent",
    key: "31",
    price: 500,
    description: "Best fit with...shoes",
    scategory: "Men",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/Laurent.jpg"),
    proprtyname: "Saint Laurent",
    key: "32",
    price: 600,
    description: "Best fit with...shoes",
    scategory: "Men",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1cloth.jpg"),
    proprtyname: "Saint Laurent",
    key: "33",
    price: 330,
    description: "Best fit with...shoes",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1cloth.jpg"),
    proprtyname: "Saint Laurent",
    key: "34",
    price: 3400,
    description: "Best fit with...shoes",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1cloth.jpg"),
    proprtyname: "Saint Laurent",
    key: "35",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1cloth.jpg"),
    proprtyname: "Saint Laurent",
    key: "36",
    price:  6500,
    description: "Best fit with...shoes",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1cloth.jpg"),
    proprtyname: "Saint Laurent",
    key: "37",
    price: 65,
    description: "Best fit with...shoes",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1cloth.jpg"),
    proprtyname: "Saint Laurent",
    key: "38",
    price: 638,
    description: "Best fit with...shoes",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1cloth.jpg"),
    proprtyname: "Saint Laurent",
    key: "39",
    price:  500,
    description: "Best fit with...shoes",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/1cloth.jpg"),
    proprtyname: "Saint Laurent",
    key: "40",
    price: 600,
    description: "Best fit with...shoes",
    scategory: "Women",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/kids.jpg"),
    proprtyname: "Saint Laurent",
    key: "41",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Kids",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/kids.jpg"),
    proprtyname: "Saint Laurent",
    key: "42",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Kids",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/kids.jpg"),
    proprtyname: "Saint Laurent",
    key: "43",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Kids",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/kids.jpg"),
    proprtyname: "Saint Laurent",
    key: "44",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Kids",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/kids.jpg"),
    proprtyname: "Saint Laurent",
    key: "45",
    price: 65,
    description: "Best fit with...shoes",
    scategory: "Kids",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/kids.jpg"),
    proprtyname: "Saint Laurent",
    key: "46",
    price: 6500,
    description: "Best fit with...shoes",
    scategory: "Kids",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/kids.jpg"),
    proprtyname: "Saint Laurent",
    key: "47",
    price: 500,
    description: "Best fit with...shoes",
    scategory: "Kids",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/kids.jpg"),
    proprtyname: "Saint Laurent",
    key: "48",
    price: 600,
    description: "Best fit with...shoes",
    scategory: "Kids",
    category: "cloth",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/labtop1.jpg"),
    proprtyname: "Hp laptop",
    key: "49",
    price: 69000,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/labtop2.jpg"),
    proprtyname: "Hp laptop",
    key: "50",
    price: 68000,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/labtop3.jpg"),
    proprtyname: "Hp laptop",
    key: "51",
    price: 9600,
    description: "Have  Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/labtop4.jpg"),
    proprtyname: "Acer",
    key: "52",
    price: 600,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/labtop5.jpg"),
    proprtyname: "Hp laptop",
    key: "53",
    price: 600,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/labtop6.jpg"),
    proprtyname: "Apple ipad",
    key: "54",
    price: 19600,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/labtop7.jpg"),
    proprtyname: "Hp laptop",
    key: "55",
    price: 23600,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/labtop8.jpg"),
    proprtyname: "Toshiba",
    key: "56",
    price: 48000,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2labtop.jpg"),
    proprtyname: "Hp laptop",
    key: "57",
    price: 57600,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/2labtop.jpg"),
    proprtyname: "Hp laptop",
    key: "58",
    price: 58800,
    description: "Have Good Graphics",
    scategory: "",
    category: "labtop",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile1.jpg"),
    proprtyname: "Techno",
    key: "59",
    price: 900,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile2.jpg"),
    proprtyname: "Samsung",
    key: "60",
    price: 9600,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile3.jpg"),
    proprtyname: "LG",
    key: "61",
    price: 19600,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile4.jpg"),
    proprtyname: "itel",
    key: "62",
    price: 11600,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile5.jpg"),
    proprtyname: "I Phone pro max 13",
    key: "63",
    price: 110600,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile6.jpg"),
    proprtyname: "Hp laptop",
    key: "64",
    price: 23600,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile.jpg"),
    proprtyname: "Hp laptop",
    key: "65",
    price: 48000,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile.jpg"),
    proprtyname: "Hp laptop",
    key: "66",
    price: 760,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
  {
    imageURi: require("../assets/mobile.jpg"),
    proprtyname: "Hp laptop",
    key: "67",
    price: 5880,
    description: "Have Good Internet ",
    scategory: "",
    category: "mobile",
    status: "not_sell",
    postmanid: "1234",
    whereFrom: "Local",
  },
];

function CreatePostTable({ navigation }) {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS postproduct (pid INTEGER PRIMARY KEY AUTOINCREMENT,pname varchar(50) NOT NULL, price varchar(50) NOT NULL,description varchar(250)  NOT NULL  ,scategory varchar(50),category varchar(50),mimage varchar(150),aimage1 varchar(150),aimage2 varchar(150),aimage3 varchar(150),aimage4 varchar(150),aimage5 varchar(150),status varchar(50),postmanid varchar(10) )",
      [],
      (success) => {
        alert("successfully created postproduct table");
      },
      (error) => {
        // alert("error34555" + JSON.stringify(error));
      }
    );
  });
}

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

function insertPostdefaultdata(){
    db.transaction((tx) => {
      for (let index = 0; index < DATA.length; index++) {
      tx.executeSql(
        "INSERT INTO `postproduct`(`pname`,`price`,`description`,`scategory`,`category`,`mimage`,`aimage1`,`aimage2`,`aimage3`,`aimage4`,`aimage5`,`status`,`postmanid`,`wherefrom`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?);COMMIT;",
        [
          DATA[index].proprtyname,
          DATA[index].price,
          DATA[index].description,
          DATA[index].scategory,
          DATA[index].category,
          DATA[index].imageURi,
          "",
          "",
          "",
          "",
          "",
          DATA[index].status,
          DATA[index].postmanid,
          DATA[index].whereFrom
        ],
        (success) => {
           // alert("Success upload to postproduct table");
        },
        (e) => {
         // alert("error" + JSON.stringify(e));
        }
      );
    }
    }, null);
   
}

function insertTable(data) {
  if (
    data.nm != "" &&
    data.em != "" &&
    data.pw != "" &&
    data.ct != "" &&
    data.kb != "" &&
    data.nkn != "" &&
    data.pn != "" &&
    data.cl != ""
  ) {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT email,name FROM asebaccount WHERE email='" + data.em + "'",
        [],
        (tx, result) => {
          let len = result.rows.length;
          if (len > 0) {
            alert("Sorry,Your Email is already Taken");
          } else {
            tx.executeSql(
              "INSERT INTO `asebaccount` (`name`,`phonenumber`,`email`,`city`,`kebele`,`nicknameofvilage`,`class`,`password`) VALUES(?,?,?,?,?,?,?,?);COMMIT;",
              [
                data.nm,
                data.pn,
                data.em,
                data.ct,
                data.kb,
                data.nkn,
                data.cl,
                data.pw,
              ],
              (success) => {
                // alert("success");
                //CreatePostTable();
                tx.executeSql(
                  "CREATE TABLE IF NOT EXISTS postproduct (pid INTEGER PRIMARY KEY AUTOINCREMENT,pname varchar(50) NOT NULL, price varchar(50) NOT NULL,description varchar(250)  NOT NULL ,scategory varchar(50),category varchar(50),mimage varchar(150),aimage1 varchar(150),aimage2 varchar(150),aimage3 varchar(150),aimage4 varchar(150),aimage5 varchar(150),status varchar(50),postmanid varchar(50) NOT NULL,wherefrom varchar(10) NOT NULL)",
                  [],
                  (success) => {
                    insertPostdefaultdata();
                    alert("Congratulations successfully created Aseb Account");
                    data.nv.navigate("FirstP");
                  },
                  (error) => {
                    alert("error34555" + JSON.stringify(error));
                  }
                );
              },
              (e) => {
                alert("Error, While inserting data");
              }
            );
          }
        }
      );
    }, null);
  } else {
    alert("Please fill out all forms carefully");
  }
}

function fetachData() {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT email,name FROM asebaccount WHERE email='Someone@gmail.com'",
      [],
      (tx, result) => {
        let len = result.rows.length;
        if (len > 0) {
          alert("Sorry your email is already taken");
        } else {
          alert("You cannnn");
        }
      }
    );
  });
}
function Signup({ navigation }) {
  const [name, setname] = useState("");
  const [Pnumber, setPnumber] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [nickname, setnickname] = useState("");
  const [kebelekt, setkebelekt] = useState("");
  const [classs, setclasss] = useState("Select Class");
  const [clasModal, setclasModal] = useState(false);
  const [password, setpassword] = useState("");
  createTable();
  return (
    <View style={styles.LoginView}>
      <Modal transparent={true} visible={clasModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            marginVertical: Dimensions.get("screen").height / 4,
            marginHorizontal: Dimensions.get("screen").width / 10,
            padding: 20,
            borderRadius: 20,
            borderColor: "silver",
            borderWidth: 1,
          }}
        >
          <Text style={{ marginStart: 10, marginBottom: 10 }}>
            Select Class
          </Text>
          <TouchableOpacity
            style={styles.modalbutton}
            onPress={() => {
              setclasss("Buyer");
              setclasModal(false);
            }}
          >
            <Text>Buyer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalbutton}
            onPress={() => {
              setclasss("Seller");
              setclasModal(false);
            }}
          >
            <Text>Seller</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalbutton}
            onPress={() => {
              setclasss("Delivery");
              setclasModal(false);
            }}
          >
            <Text>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginHorizontal: 15 }}
            onPress={() => {
              setclasModal(false);
            }}
          >
            <Text
              style={{
                color: "white",
                backgroundColor: "orange",
                width: 50,
                paddingHorizontal: 4,
                paddingVertical: 5,
                borderRadius: 10,
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={styles.Login}> Get Started</Text>
        </View>
        <Text style={{ marginBottom: 5, fontSize: 22, marginStart: 40 }}>
          Name
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              color: "black",
              borderRadius: 13,
              paddingStart: 10,
              width: Dimensions.get("screen").width - 80,
              marginBottom: 10,
            }}
            placeholder="First name"
            onChangeText={setname}
          ></TextInput>
        </View>
        <Text style={{ marginBottom: 5, fontSize: 22, marginStart: 40 }}>
          Phone Number
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              color: "black",
              borderRadius: 13,
              paddingStart: 10,
              width: Dimensions.get("screen").width - 80,
              marginBottom: 10,
            }}
            placeholder="0911........"
            onChangeText={setPnumber}
            keyboardType="number-pad"
          ></TextInput>
        </View>

        <Text style={{ marginBottom: 5, fontSize: 22, marginStart: 40 }}>
          Email
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              color: "black",
              borderRadius: 13,
              paddingStart: 10,
              width: Dimensions.get("screen").width - 80,
              marginBottom: 10,
            }}
            placeholder="someone@gmail.com"
            onChangeText={setemail}
            keyboardType="email-address"
          ></TextInput>
        </View>
        <Text style={{ marginBottom: 5, fontSize: 22, marginStart: 40 }}>
          City
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              color: "black",
              borderRadius: 13,
              paddingStart: 10,
              width: Dimensions.get("screen").width - 80,
              marginBottom: 10,
            }}
            placeholder="city name"
            onChangeText={setcity}
          ></TextInput>
        </View>
        <Text style={{ marginBottom: 5, fontSize: 22, marginStart: 40 }}>
          Kebele/kfleketema
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              color: "black",
              borderRadius: 13,
              paddingStart: 10,
              width: Dimensions.get("screen").width - 80,
              marginBottom: 10,
            }}
            placeholder="kebele number/kfleketema name"
            onChangeText={setkebelekt}
          ></TextInput>
        </View>
        <Text style={{ marginBottom: 5, fontSize: 22, marginStart: 40 }}>
          Nick name of village
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              color: "black",
              borderRadius: 13,
              paddingStart: 10,
              width: Dimensions.get("screen").width - 80,
              marginBottom: 10,
            }}
            placeholder="special name of your village"
            onChangeText={setnickname}
          ></TextInput>
        </View>

        <Text style={{ marginBottom: 5, fontSize: 22, marginStart: 40 }}>
          Class
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: Dimensions.get("screen").width - 80,
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              color: "black",
              borderRadius: 13,
              paddingStart: 10,
              marginBottom: 20,
              paddingVertical: 5,
            }}
            onPress={() => {
              setclasModal(true);
            }}
          >
            {classs}
          </Text>
        </View>
        <Text style={{ marginBottom: 5, fontSize: 22, marginStart: 40 }}>
          Password
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 1,
              color: "black",
              borderRadius: 13,
              paddingStart: 10,
              width: Dimensions.get("screen").width - 80,
              marginBottom: 10,
            }}
            placeholder="password"
            onChangeText={setpassword}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              insertTable({
                nm: name,
                pn: Pnumber,
                em: email,
                ct: city,
                kb: kebelekt,
                nkn: nickname,
                cl: classs,
                pw: password,
                nv: navigation,
              });
            }}
            style={styles.LoginButton}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "500" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default Signup;
const styles = StyleSheet.create({
  Login: {
    fontSize: 35,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 20,
  },
  LoginView: {
    marginStart: 0,
  },
  LoginButton: {
    backgroundColor: "orange",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 2,
    paddingBottom: 5,
    borderRadius: 15,
    margin: 10,
  },
  forgotPassword: {
    paddingStart: 30,
    paddingEnd: 20,
    paddingTop: 2,
    paddingBottom: 5,
    borderRadius: 15,
    margin: 10,
  },
  modalbutton: {
    margin: 10,
    borderWidth: 1,
    borderColor: "silver",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
