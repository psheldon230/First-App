import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Linking, SafeAreaView, ScrollView, RefreshControl, SectionList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [Sections, setSections] = useState ([
    {
      title:'Title 1',
      data:['Item 1-1', 'Item 1-2', 'Item 1-3'],
    }
  ])
  const[Refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    const count = Sections.length + 1
    setRefreshing(true)
    setSections([...Sections, {
      title:'Title ' + count,
      data: ['Item '+count +'-1','Item '+count +'-2', 'Item '+count +'-3'],
    }])
     setRefreshing(false)
  }
  
  return (
    <SectionList
      keyExtractor = {(item, index)=> index.toString()}
      sections= {Sections}
      renderItem={({item}) => (
       <Text style= {styles.text}>{item}</Text>
      )}
      renderSectionHeader= {({section}) => (
        <View style= {styles.item}>
          <Text style= {styles.text}>{section.title}</Text>
       </View>

      )}
      refreshControl= {
        <RefreshControl
        refreshing= {Refreshing}
        onRefresh= {onRefresh}
        />

      }
     />

    // <FlatList
    // keyExtractor= {(item, index) => index.toString()}
    // data= {Items}
    // renderItem={({item}) => (
    //   <View style= {styles.item}>
    //          <Text style= {styles.text}>{item.name}</Text>
    //         </View>


    // )}
    // refreshControl= {
    //   <RefreshControl
    //   refreshing= {Refreshing}
    //   onRefresh= {onRefresh}
    //   colors={['blue']}
    //   />
    // }
    // />

    // <View style= {styles.body}>
    //   <ScrollView>
    //   {

    //     Items.map((object)=>
    //     {

        
    //       return (
    //         <View style= {styles.item} key={object.key}>
    //           <Text style= {styles.text}>{object.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
    //   </ScrollView>
    // </View>

  )
    }

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal'
  },
  text: {
    color: '#000',
    fontSize: 40,
    margin: 10,
  }
});
