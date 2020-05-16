import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, Button, Alert} from 'react-native'
import Header from './Header'
import Card from './Card'
import { Ionicons } from '@expo/vector-icons';

const Register = props => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //const [inputArray, setInputArray] = useState([]);
    const errormsg=["Invalid Email","Invalid username","Password didn't match"];

    const emailHandler = (inputText) => {
        setEmail(inputText);
    }

    const userNameHandler = (inputText) => {
        setUserName(inputText);
    }

    const passwordHandler = (inputText) => {
        setPassword(inputText)
    }

    const confirmPasswordHandler = (inputText) => {
        setConfirmPassword(inputText)
    }

    const resetEmailHandler = () => {
        setEmail('');
    }

    const checkInputHandler = () => {
       if(!email.includes(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    )){
           Alert.alert('Invalid Email Address', 'Email must contain @', [{text: 'Okay', style:'destructive', onPress: resetEmailHandler}])
       }
    }

    return (
        <View>
            <Header title="Weather App"/>
            <View style={styles.registerContainer}>
                <Text style={styles.intro}>Register</Text>
                <Card style={styles.inputContainer}>
                    <Ionicons name='md-mail' size={24} color='black'/>
                    <TextInput placeholder="Email" style={styles.input} onChangeText={emailHandler}/>
                </Card>
                <Card style={styles.inputContainer}>
                    <Ionicons name='md-person' size={24} color='black'/>
                    <TextInput placeholder="Username" style={styles.input} onChangeText={userNameHandler}/>
                </Card>
                    <Card style={styles.inputContainer}>
                        <Ionicons name='md-lock' size={24} color='black'/>
                    <TextInput placeholder="Password" style={styles.input} onChangeText={passwordHandler}/>
                    </Card>
                        <Card style={styles.inputContainer}>
                            <Ionicons name='md-lock' size={24} color='black'/>
                    <TextInput placeholder="Confirm password" style={styles.input} onChangeText={confirmPasswordHandler}/>
                        </Card>

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='REGISTER' onPress={checkInputHandler}/>
                        </View>
                        <View style={styles.button}>
                            <Button title='SIGN IN'/>
                        </View>
                    </View>
                <Text>{email},{userName},{password},{confirmPassword}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    intro: {
        textAlign: "center",
        fontSize: 16
    },
    registerContainer: {
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
        width: 120,
        borderRadius: 50,
        borderWidth: 1,
        overflow: 'hidden',
        fontSize: 10
    }
})
export default Register
