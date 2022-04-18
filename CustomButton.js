import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';

const PeterButton = (props) =>
{
    return (
        <Pressable
        onPress={props.OnPressButtonFunction}
        underlayColor='red'
      >
        <View style={styles.button}>
          <Text style={styles.text}>
           {props.title}
          </Text>
        </View>
      </Pressable>

    )

}
const styles = StyleSheet.create(
    {
        text: {
            color: '#000',
            fontSize: 40,
            margin: 40,
            textAlign: 'center'

          }
    
        })
export default PeterButton;