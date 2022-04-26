import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, FlatList, Linking, SafeAreaView, ScrollView, RefreshControl, SectionList, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ScreenB({navigation})
{
  const onPressHandler = () => {
    navigation.navigate('Screen A')
  }

  return(
  <View
  style= {styles.body}>
    <Text
    style= {styles.text}>
      Screen B
    </Text>
    <Pressable
    onPress={onPressHandler}
    style= {({pressed}) => ({backgroundColor: pressed? 'red' : '#ddd'})}>
      <Text
      style= {styles.text}>
        To Screen A
      </Text>
    </Pressable>
  </View>
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