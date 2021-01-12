import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, Keyboard } from 'react-native'
import users from '../Helpers/users'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userEmail: "",
            userPassword: ""
        }
    }

    _setEmail(text){
        this.setState({ userEmail: text})
    }

    _setPassword(text){
        this.setState({ userPassword: text})
    }

    _login() {
        const { userEmail, userPassword } = this.state
        fetch('http://192.168.1.49:80/test/index.php',{
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                // Ici on envoie les données saissir par l'utilisateur au server
                email: userEmail,
                password: userPassword
            })
        })
        .then((Response) => Response.json())
        .then((ResponseJson) => {
            if(ResponseJson == "Ok"){
                // On redirige l'utilisateur sur son profile
                alert("Successfully Login")
                this.props.navigation.navigate("Profile")
            } else {
                alert("Wrong Details")
            }
        })
        .catch((error) => {
            console.error(error)
        })
        Keyboard.dismiss()
    }

    render(){
        return(
            <View style = {styles.main_container}>
                <View style = {styles.image_container}>
                    <Image
                        style = {styles.image}
                        source = {require('../Image/LOGO_VENIO.png')}
                    />
                </View>
                <View style = {styles.sub_container}>
                    <TextInput
                        style = {styles.Text}
                        placeholder = 'Email'
                        onChangeText = {(text) => this._setEmail(text)}
                    />

                    <TextInput
                        style = {styles.Text}
                        placeholder = 'Mot de passe'
                        onChangeText = {(text) => this._setPassword(text)}
                    />

                    <Button
                        title = 'Se connecter'
                        onPress = {() => this._login()}
                    />
                </View>
                <View style = {styles.condition}>
                    <Text style = {styles.condition_container}>Conditions d'utilisation</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#00aeff',
        alignContent: 'center',
        justifyContent: 'center'
    },
    sub_container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 18,
        borderBottomWidth: 2,
        marginBottom: 15,
        width: 200,
        height: 50
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: 200,
        height: 40,
        backgroundColor: 'blue'
    },
    text_opacity: {
        fontSize: 18,
        color: 'white'
    },
    image_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: '#00aeff'
    },
    condition: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    condition_container: {
        fontSize: 18,
        fontStyle: 'italic',
        padding: 5,
    }

})

export default Login