import React, { Component } from 'react';
import firebase from 'firebase';
import { View, TextInput, Text, Alert, StyleSheet } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', isLoading: false };
        this.onPressButton = this.onPressButton.bind(this);
    }

    onPressButton() {
        const { email, password } = this.state;

        this.setState({ error: '', isLoading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailure.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '', password: '',
            error: '', isLoading: false
        })
    }

    onLoginFailure() {
        this.setState({ error: 'Authentication failed!', isLoading: false })
    }

    render() {
        const { email, password, error, isLoading } = this.state;

        const button = !isLoading ? (
            <Button onPress={this.onPressButton}>Log in</Button>
        ) : (
                <Spinner size="small" />
            );

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {error}
                </Text>

                <CardSection>
                    {button}
                </CardSection>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
})

export default LoginForm;