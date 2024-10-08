import { Text, SafeAreaView, StyleSheet, TextInput, Button, Image, Icon } from 'react-native';

//Tuan7_21073911_NguyenBaMinhTriet_Lab7_1

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text}>
        MANAGE YOUR TASK
      </Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Enter your name"
        keyboardType="email-address"
      />


       <Button style={styles.Button} title="GET STARTED ->" onPress={() => {}} />

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

  Text: {
    margin: 24,
    fontSize: 24,
    color: '#8353E2',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  
  Button: {
    
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});