import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Linking, SafeAreaView, ScrollView, RefreshControl, SectionList, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';

const App = () => {
  const [name, setName] = useState('')
  const [state, setState] = useState(false)
  const onPressButton = () => {
    setState(!state)
    
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:
      </Text>
      <TextInput style={styles.input}
        placeholder='Ex: Isaac'
        onChangeText={(v) => setName(v)}
      />
      <Pressable
      onPress={onPressButton}
      underlayColor= 'red'
      >
        <View style= {styles.button}>
        <Text style={styles.text}> 
        {
         state ?
          'Clear'
          :
          'Submit'
        }
        </Text>
        </View>
      </Pressable>
      {state ?
        <Text style={styles.text}>Your name is {name}</Text>
        :
        null
      }
    </View>




  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'lime',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 40,
    margin: 40,
    textAlign: 'center'
  },
  input:
  {
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    textAlign: 'center',
    fontSize: 20,

  },
  button: {
   

  }
});

export default App
