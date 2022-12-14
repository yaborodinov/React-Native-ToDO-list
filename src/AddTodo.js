import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Alert } from 'react-native';

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const onHandler = () => {
        if(value.trim()){
            onSubmit(value.toString().trim());
            setValue('');
        } else {
            Alert.alert("Can't be empty!");
        }
    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} onChangeText={text => setValue(text)} value={value} placeholder='Enter Todo...' autoCorrect={false} autoCapitalize="none"/>
            <Pressable style={styles.button} onPress={onHandler}>
                <Text style={styles.text}>ADD</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#3949ab',
        marginBottom: 15,
    },
    button: {
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
    }
})
