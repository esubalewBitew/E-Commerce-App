import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Button,
  Alert,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from '@expo/vector-icons';
import Category from "./Component/Explore/Category";
import Category2 from "./Component/Explore/Category2";
import ScreenProvider, { useLogin } from "./Context/ScreenProvider";
import Shoes from "./Component/Shoes.js";
import Profile from "./Component/Profile";
import map from "./Component/Explore/map";
import Cloth from "./Component/Cloth.js";
import Labtop from "./Component/Labtop.js";
import Mobile from "./Component/Mobile.js";
import Login from "./Component/Login.js";
import Signup from "./Component/Signup.js";
import Firstpage from "./Component/Firstpage.js";
import Forgotpassword from "./Component/Forgotpassword.js";
import Enterconfirm from "./Component/Enterconfirm.js";
import Detail from "./Component/Detail.js";
import OnlineDetail from "./Component/OnlineDetail.js";
import DeliverDetail from "./Component/DeliverDetail.js";
import Checkout from "./Component/Checkout.js";
import MyCarts from "./Component/MyCarts.js";
import Womenshoes from "./Screens/Womenshoes.js";
import KidShoes from "./Screens/KidShoes.js";
import ImagePickers from "./Component/PostProduct.js";
import Saveimage from "./Component/Saveimage.js";
import SellerPage from "./Component/SellerPage.js";
import DeliveryPage from "./Component/DeliveryPage.js";
import BottomMenu from "./Component/BottomMenu";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const homename = "Home";
const cartname = "cart";
const notificationname = "notification";
const profilename = "Profile";

const STUDENTS = [
  { name: "Sophia", age: 23 },
  { name: "Melat", age: 26 },
  { name: "Haron", age: 26 },
];
const DATA = [
  {
    imageURi: require("./assets/1shoes.jpg"),
    proprtyname: "Vans",
    key: "1",
  },
  {
    imageURi: require("./assets/women2.jpg"),
    proprtyname: "Hill",
    key: "2",
  },
  {
    imageURi: require("./assets/1cloth.jpg"),
    proprtyname: "Cloths",
    key: "3",
  },
  {
    imageURi: require("./assets/2labtop.jpg"),
    proprtyname: "Hp pavila ",
    key: "4",
  },
  {
    imageURi: require("./assets/2mobile.jpg"),
    proprtyname: "Samsung",
    key: "5",
  },
  {
    imageURi: require("./assets/kid2.jpg"),
    proprtyname: "kid shoes",
    key: "6",
  },
  {
    imageURi: require("./assets/mencl2.jpg"),
    proprtyname: "junius",
    key: "7",
  },
];
function HomeScreen({ navigation }) {
  var device = "./assets/house.jpg";
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          marginStart: 5,
          marginBottom: 10,
          marginTop: 0,
          flexDirection: "row",
        }}
      >
        <TextInput
          placeholder="search your favourite here"
          style={{
            backgroundColor: "white",
            borderColor: "gray",
            borderWidth: 1,
            color: "red",
            borderRadius: 13,
            paddingStart: 10,
            width: "85%",
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => navigation.navigate("SellerPage")}
          style={{ width: "10%", marginStart: 10 }}
        >
          <FontAwesome5 name="product-hunt" size={29} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.MainView}>
        <ScrollView horizontal={true}>
          <Category
            name="All"
            style={{ backgroundColor: "orange", color: "white" }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Shoes")}>
            <Category name="Shoes" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Labtop")}>
            <Category name="Laptop" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cloth")}>
            <Category name="Cloth" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Mobile")}>
            <Category name="Mobile" />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{ marginTop: 10, flex: 1 }}>
        <FlatList
          numColumns={2}
          data={DATA}
          renderItem={({ item }) => (
            <Category2
              imageURi={item.imageURi}
              proprtyname={item.proprtyname}
            />
          )}
        />
      </View>
    </View>
  );
}
function StackNavigators() {
  return (
    <Stack.Navigator
      initialRouteName="MHOME"
      screenOptions={{ animationEnabled: false }}
    >
      <Stack.Screen
        name="MHome"
        options={{
          title: "Aseb.com",
          headerStyle: {
            backgroundColor: "white",
            padding: 0,
            height: 5,
          },
          headerTintColor: "orange",
          headerTitleStyle: {
            fontSize: 25,
            marginStart: 80,
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="Shoes" component={Shoes} />
      <Stack.Screen name="Mobile" component={Mobile} />
      <Stack.Screen name="Cloth" component={Cloth} />
      <Stack.Screen name="Labtop" component={Labtop} />
      <Stack.Screen
        name="Login"
        options={{
          title: "",
        }}
        component={Login}
      />
      <Stack.Screen name="PostProduct" component={ImagePickers} />
      <Stack.Screen name="SellerPage" component={SellerPage} />
      <Stack.Screen name="DeliveryPage" component={DeliveryPage} />
      <Stack.Screen name="DeliverDetail" component={DeliverDetail} />
      <Stack.Screen name="uploadimage" component={Saveimage} />
      <Stack.Screen
        name="FirstP"
        options={{ headerShown: false }}
        component={Firstpage}
      />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="OnlineDetail" component={OnlineDetail}/>
      <Stack.Screen name="Confirm" component={Enterconfirm} />
      <Stack.Screen name="Forgot" component={Forgotpassword} />
      <Stack.Screen name="Carts" component={MyCarts} />
      <Stack.Screen
        name="Signup"
        options={{
          title: "",
        }}
        component={Signup}
      />
      <Stack.Screen name="Womenshoes" component={Womenshoes} />
      <Stack.Screen name="Kidshoes" component={KidShoes} />
    </Stack.Navigator>
  );
}
function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homename) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === cartname) {
              iconName = focused ? "cart" : "cart-outline";
            } else if (rn === notificationname) {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (rn === profilename) {
              iconName = focused ? "md-person-sharp" : "md-person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: "orange",
          inactiveTintColor: "gray",
          labelStyle: { paddingBottom: 5, fontSize: 10 },
        }}
      >
        <Tab.Screen name="Home" component={StackNavigators}/>
        <Tab.Screen name="cart" component={MyCarts}/>
        <Tab.Screen name="notification" component={GetSetting} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstP"
        screenOptions={{ animationEnabled: false }}
      >
        <Stack.Screen
          name="MHome"
          options={{
            title: "Aseb.com",
            headerStyle: {
              backgroundColor: "white",
              padding: 0,
              height: 15,
            },
            headerTintColor: "orange",
            headerTitleStyle: {
              fontSize: 35,
              marginStart: 70,
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen name="Login" options={{ title: "" }} component={Login} />
        <Stack.Screen
          name="FirstP"
          options={{ headerShown: false }}
          component={Firstpage}
        />
        <Stack.Screen name="Signup" options={{ title: "" }} component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function StackNavigatorSeller() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Seller Page"
        screenOptions={{ animationEnabled: false }}
      >
        <Stack.Screen name="PostProduct" component={ImagePickers} />
        <Stack.Screen name="Login" options={{ title: "" }} component={Login} />
        <Stack.Screen
          name="Seller Page"
          component={SellerPage}
        />
        <Stack.Screen name="Signup" options={{ title: "" }} component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function StackNavigatorDeliver() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstP"
        screenOptions={{ animationEnabled: false }}
      >
        <Stack.Screen
          name="MHome"
          options={{
            title: "Aseb.com",
            headerStyle: {
              backgroundColor: "white",
              padding: 0,
              height: 15,
            },
            headerTintColor: "orange",
            headerTitleStyle: {
              fontSize: 35,
              marginStart: 70,
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="FirstP"
          options={{ headerShown: false }}
          component={DeliveryPage}
        />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainNavigator(){
  const { isLogined } = useLogin();
  const { classs } = useLogin();
  if (classs == "Buyer") {
    return isLogined ? <TabNavigator /> : <StackNavigator />;
  } else if (classs == "Seller") {
    return isLogined ? <StackNavigatorSeller /> : <StackNavigator />;
  } else if (classs == "Delivery") {
    return isLogined ? <StackNavigatorDeliver /> : <StackNavigator />;
  }
}
function GetSetting() {
  return (
    <View>
      <Text>Setting option</Text>
    </View>
  );
}
export default function App() {
  return (
    <View style={styles.containerMain}>
      <ScreenProvider>
        <MainNavigator />
      </ScreenProvider>
    </View>
  );
}
//{} is used as call one function {{ }} used for object
const styles = StyleSheet.create({
  myText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    marginStart: 3,
    marginTop: 10,
  },
  containerMain: {
    flex: 1,
    marginStart: 3,
    marginTop: 30,
  },
  ListService: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center", //for horizontal
    justifyContent: "center", //for horizontal
  },
  MainView: {
    marginTop: 0,
    marginStart: 5,
  },
});
