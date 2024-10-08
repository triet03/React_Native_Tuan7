import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, Image, FlatList, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

//Tuan7_21073911_NguyenBaMinhTriet_Lab7_2


const learn = [
  {
    id: '1',
    name : 'To check mail',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2XWgXabPgjjbLku8...Qz-Rg&s'

  },

  {
    id: '2',
    name : 'UI task web page',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2XWgXabPgjjbLku8...Qz-Rg&s'
  },

  {
    id: '3',
    name : 'Learn Javascript basic',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2XWgXabPgjjbLku8...Qz-Rg&s'
  },

  {
    id: '4',
    name : 'Learn HTML Advance',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2XWgXabPgjjbLku8...Qz-Rg&s'
  },

  {
    id: '5',
    name : 'Medical App UI',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2XWgXabPgjjbLku8...Qz-Rg&s'
  },

  {
    id: '6',
    name : 'Learn Java',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2XWgXabPgjjbLku8...Qz-Rg&s'
  },
]

const GridItem = ({ item }) => (
  <View style={styles.itemContainer}>  
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text  style={styles.itemName}>{item.name}</Text>
      
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       
        <TextInput style={styles.TextInput}>        
          Search
        </TextInput>

        <FlatList
        data={learn}
        renderItem={({ item }) => <GridItem item={item} />}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.floatingButton}>
      <Text style={styles.Sign}>+</Text>

      </TouchableOpacity>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },

  itemName: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'left',
 
  },

  itemContainer: {
    flexDirection: 'row', 
    backgroundColor: '#f9f9f9',
    borderRadius: 8,  
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between', 
  },

  TextInput: {
    width: '100%',
    height: 50,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 30,
  },

  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 10,
  },

  floatingButton: { 
  position: 'absolute', 
  bottom: 30, 
  left: 150, 
  backgroundColor: '#00BDD6', 
  width: 100, 
  height: 100, 
  borderRadius: 100, 
  justifyContent: 'center', 
  alignItems: 'center', 
  elevation: 5, 
  
  },

  Sign: {
    fontSize: 30,
    color: 'white'

  },

  paragraph: {
    margin: 24,
    fontSize: 18,
fontWeight: 'bold',
    textAlign: 'center',
  },
});