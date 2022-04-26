import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, FlatList, Linking, SafeAreaView, ScrollView, RefreshControl, SectionList, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions= { () => ({
        header: () => null,
        tabBarIcon: (focused, color, size) => null})}
      tabBarOptions= {{
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'grey',
        labelStyle: {alignItems: 'center',
                    fontSize: 15,
                    justifyContent: 'center'},
      }}>
    
        <Tab.Screen
          name= 'Screen A'
          component= {ScreenA}>
          
        </Tab.Screen>
        <Tab.Screen
          name= 'Screen B'
          component= {ScreenB}>
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>

  )
}
const styles = StyleSheet.create({
body:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
text:{
  fontSize: 40,
  fontWeight: 'bold',
  margin: 10,


}

})

  

export default App
