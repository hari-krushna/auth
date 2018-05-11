import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner , Button} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { isLoggedIn: null }
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyBUeGzRRBTLMdagUlh7_IP8OvtUWEYCPxA",
                authDomain: "authentication-b79a0.firebaseapp.com",
                databaseURL: "https://authentication-b79a0.firebaseio.com",
                projectId: "authentication-b79a0",
                storageBucket: "authentication-b79a0.appspot.com",
                messagingSenderId: "213857268343"
            }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoggedIn: true })
            } else {
                this.setState({ isLoggedIn: false })
            }
        })
    }

    renderContent() {
        console.log('isLoggedIn', this.state.isLoggedIn)
        switch (this.state.isLoggedIn) {
            case true:
                return (
                    <Button
                        onPress = {()=> firebase.auth().signOut()}
                    >Log out</Button>
                );

            case false:
                return (
                    <LoginForm />
                );

            default:
                return (
                    <Spinner size="large" />
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;