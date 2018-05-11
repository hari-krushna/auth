import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
    const { textSize, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textSize}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textSize :{
        fontSize: 20
    },
    viewStyle : {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        height: 50,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2},
        position: 'relative',

    }
});

export { Header };