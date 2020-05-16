import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import Header from './Header'
import Card from './Card'
import { Ionicons } from '@expo/vector-icons';

const Login = props => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const userHandler = () => {

  }


  const checkUsernameHandler = (name) => {
    setUserName(name.replace(/[^a-zA-Z0-9]/g, ''))
  }

  const passwordHandler = (password) => {
    setPassword(password);
  }


  return (
    <View>
      <Header title='Welcome to WeatherApp' />
      <View style={styles.loginContainer}>
        <Text style={styles.text}>Login</Text>
        <Card style={styles.inputContainer}>
          <Ionicons name='md-person' size={24} color='black'/>
          <TextInput style={styles.input} placeholder='Username' onChangeText={checkUsernameHandler}
                     value={userName} maxLength={20}/>
        </Card>
        <Card style={styles.inputContainer}>
          <Ionicons name='md-lock' size={24} color='black'/>
          <TextInput style={styles.input} placeholder='Password' maxLength={15} secureTextEntry={true}
                     onChangeText={passwordHandler} />
        </Card>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='SIGN In' onPress={userHandler}/>
            </View>
            <View style={styles.button}>
              <Button title='SIGN UP' />
            </View>
          </View>
        <Text>userName : {userName}</Text>
        <Text>Password : {password}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },
  text: {
    fontSize: 20
  },
  inputContainer: {
    width: '80%',
    height: 60,
    marginVertical: 20,
    flexDirection:  'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '80%',
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 10
  },
  button: {
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    overflow: 'hidden'
  }
})

export default Login
