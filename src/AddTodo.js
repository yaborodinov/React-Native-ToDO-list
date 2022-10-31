import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = () => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title='Add' style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#3949ab'
    }
})