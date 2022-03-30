import { StatusBar } from 'expo-status-bar';
import { Button, Linking, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style= {styles.container}>
      <Text style= {styles.text}> My First App!
      </Text>
      <Button title= 'Click Me' onPress= {()=>{Linking.openURL('https://news.sky.com/story/blinking-white-guy-meet-the-man-using-meme-fame-to-raise-thousands-for-charity-11819235')}}> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 40
  }
});
