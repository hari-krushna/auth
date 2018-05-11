import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = (props) => {
    const { size } = props;
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
}

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { Spinner };