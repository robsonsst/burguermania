import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Chat() {
 return (
   <View style={styles.container}>
      <Text style={styles.title}>Fale conosco</Text>

      <View style={styles.message}>
        <Text style={styles.textMessage}>Serviço temporariamente indisponível</Text>
      </View>
      <View style={styles.sendMessage}> 
        <View style={styles.input}>
          <Text style={styles.text}>Enviar mensagem</Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.text}>Enviar</Text>
        </View>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',    
  },
  title:{
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
    marginLeft: 10,
    marginBottom: 50
  },
  message:{
    width: '90%',
    height: '80%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    backgroundColor: '#8D8686',
    borderColor: '#BF8DB2',
    borderWidth: 1
  },
  textMessage:{
    fontSize: 15,
    margin: 10
  },
  sendMessage:{    
    flexDirection: 'row',
    marginTop: 5,
    padding: 10,
    justifyContent: 'center'
  },
  input:{
    width: '77%',
    height: 30,
    marginRight: 10,
    backgroundColor: '#8D8686',
    borderColor: '#BF8DB2',
    borderWidth: 1,
    borderRadius: 5
  },
  button:{
    width: '15%',
    height: 30,
    backgroundColor: '#8D8686',
    borderColor: '#BF8DB2',
    borderWidth: 1,
    borderRadius: 5
  },
  text:{
    fontSize: 15,
    margin: 4
  }
});