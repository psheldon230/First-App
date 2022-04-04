import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Linking, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[name, setName] = useState("Peter's Counter!")
  const[session, setSession] = useState({number: 0})
  const[numState, setNumstate] = useState('')
  const[current,setCurrent] = useState(true)
  const onClick = () => {
    let num = session.number
    num ++
    if (num % 2 == 0)
    {
      setNumstate('Even')
    }
    else{

      setNumstate('Odd')
    }
    setName("Current Count: ")
    setSession({number: num})
  }
  return (
    <View style= {styles.container}>
      <Text style= {styles.text}>  {name}</Text>
      <Text style= {styles.countBox}> {session.number} </Text>
      <Text style= {styles.text}> State: {numState} </Text>
      <Button title= 'Update State' onPress ={onClick}> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {

  },
  text: {
    color: '#fff',
    fontSize: 25,
    margin: 2,
  },
  countBox: {
    fontSize: 40,
    margin: 40,
    backgroundColor: 'lime'
  }
});
