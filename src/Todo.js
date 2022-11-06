import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({text, id, onRemove}) => {
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('Pressed', id)}
            onLongPress={() => onRemove(id)}
        >
            <View style={styles.todo}>
                <Text>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    }
})
