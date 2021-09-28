/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import { Button, TextInput, TouchableOpacity,Text, View,ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MyTabs from './src/screens/TabScreens';
import { Linking } from 'react-native';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor: '#009387'
        },
        headerTintColor: "#fff"
      }} initialRouteName="Home">
        <Drawer.Screen name="Home" component={MyTabs} />
        <Drawer.Screen name="Login" component={NotificationsScreen} />
        <Drawer.Screen name="Naveed" component={Naveed} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',margin: "10%",}}>
    <Text style={{fontSize: 30,fontWeight: 'bold'}}>LOGIN</Text>
     <TextInput style={{borderBottomColor:"black",borderColor: "#fff",borderWidth: 1,width: "90%",margin: "10%"}} placeholder={"Enter Email"} />
     <TextInput style={{borderBottomColor:"black",borderWidth: 1,borderColor: "white",width: "90%"}} placeholder={"Enter Email"}  />
        <Button  style={{backgroundColor: 'black',marginTop: '10'}} title="Submit" />

    <View style={{marginTop: "10%",width: "80%"}}>
      <Text>Create a new Account{'\n'}
      <TouchableOpacity> 
      <Text> Click me</Text>
     </TouchableOpacity>
          </Text>
          <ActivityIndicator size="small" color="#0000ff" />

     <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  Google
</Text>
     </View>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
    </View>
  );
}
function Naveed({ navigation }) {
  return <Tab.Navigator>
    <Tab.Screen name="TabNav" component={TabNav} />
    <Tab.Screen name="TabScreen" component={TabScreen} />
  </Tab.Navigator>

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button onPress={() => navigation.goBack()} title="Go back home" />
    // </View>
}
function TabScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function TabNav({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}