import 'react-native-gesture-handler';
import React from "react";
import { Image, View } from "react-native";
import Home from "./src/screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { clock, homeBtn, setting, wallet } from "./src/components/assets";
import QrCodeScreen from "./src/screens/QrCodeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Portfolio from './src/screens/Portfolio';
import Wallet from './src/screens/Wallet';
import Setting from './src/screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen
        options={{
          tabBarIcon() {
            return (
              <Image source={homeBtn} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
            )
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold"
          },
        }}
        name="Home" component={Home} />
         <Tab.Screen
        options={{
          tabBarIcon() {
            return (
              <Image source={clock} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
            )
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold"
          },
        }}
        name="Portfolio" component={Portfolio} />
        <Tab.Screen
        options={{
          tabBarIcon() {
            return (
              <Image source={wallet} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
            )
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold"
          },
        }}
        name="Wallet" component={Wallet} />
        <Tab.Screen
        options={{
          tabBarIcon() {
            return (
              <Image source={setting} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
            )
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold"
          },
        }}
        name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="QrCodeScreen" component={QrCodeScreen} />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App;