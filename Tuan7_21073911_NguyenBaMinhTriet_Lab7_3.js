import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

//Tuan7_21073911_NguyenBaMinhTriet_Lab7_3

const AddJobScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg' }} 
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.greetingText}>Hi Twinkle</Text>
          <Text style={styles.subtitleText}>Have a great day ahead</Text>
        </View>
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <TextInput
        style={styles.input}
        placeholder="input your job"
      />

      <Button
        title="FINISH"
        onPress={() => alert('Job added!')}
        color="#00C6AE"
      />

      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/yellow-note-paper-with-red-pin_1284-42430.jpg' }} 
        style={styles.bottomImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    color: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  bottomImage: {
    width: 300,
    height: 300,
    marginTop: 200,
  },
});

export default AddJobScreen;
