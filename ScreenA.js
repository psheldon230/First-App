import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, FlatList, Linking, SafeAreaView, ScrollView, RefreshControl, SectionList, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function ScreenA({navigation})
{
  const onPressHandler = () => {
    navigation.navigate('Screen B')
  }
  return(
  <View
  style= {styles.body}>
    <Text
    style= {styles.text}>
      Screen A
    </Text>
    <Pressable
    onPress={onPressHandler}
    style= {({pressed}) => ({backgroundColor: pressed? '#ddd' : '#0f0'})}>
      <Text
      style= {styles.text}>
        To Screen B
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