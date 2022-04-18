import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, FlatList, Linking, SafeAreaView, ScrollView, RefreshControl, SectionList, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, Modal } from 'react-native';
import PeterButton from './CustomButton';

const App = () => {
  const [name, setName] = useState('')
  const [state, setState] = useState(false)
  const [showWarning, setShowwarning] = useState(false)
  const onPressButton = () => {
    if (state | name.length > 3) {
      setState(!state)
    }
    else {
      setShowwarning(true)
    }
  }
  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() =>
          setShowwarning(false)}
      >
        <View style= {styles.centeredView}>
        <View style={styles.warningView}>
        
          <Text style={styles.warningText}>The name must be longer than 3 characters</Text>
          <Button
            title='Back'
            onPress={() => setShowwarning(false)}
          />
        </View>
        </View>
      </Modal>
      <Text style={styles.text}>Please write your name:
      </Text>
      <TextInput style={styles.input}
        placeholder='Ex: Isaac'
        onChangeText={(v) => setName(v)}
      />
      <PeterButton
      OnPressButtonFunction={onPressButton}
      title={ 
        state ?
          'Clear'
          :
          'Submit'
      }

      />
      {/* <Pressable
        onPress={onPressButton}
        underlayColor='red'
      >
        <View style={styles.button}>
          <Text style={styles.text}>
            {
              state ?
                'Clear'
                :
                'Submit'
            }
          </Text>
        </View>
      </Pressable> */}
      
      {state ?
      <View
      styles= {styles.body}>
        <Text 
        style= {styles.text}>Your name is {name}
        </Text>
        <Image
        style={styles.image}
        source= {require("./assets/checkmark.jpg")}/>
       
      </View>
        :

        <Image
        style={styles.image}
         source={require("./assets/error.jpg")}
         />

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
  centeredView:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  warningText:
  {
    color: '#FFF',
    fontSize: 20,
    margin: 40,
    textAlign: 'center'
  },
  warningView: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 30


  },
  image:
  {
    margin: 2,
    width: 100,
    height: 100,
  }
});

export default App
