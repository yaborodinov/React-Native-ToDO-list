import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const onHandler = () => {
        onSubmit(value.toString().trim())
        setValue('')
    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} onChangeText={text => setValue(text)} value={value} placeholder='Enter Todo...'/>
            <Button title='Add' style={styles.button} onPress={onHandler}/>
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
        borderBottomColor: '#3949ab',
        marginBottom: 15
    }
})
