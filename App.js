import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {

    setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          title,
        }
      ]
    ) 
  }
  return (
    <View>
      <Navbar title={'ToDo App'}/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <View>
          {todos.map((todo) => <Text key={todo.id}>{todo.title}</Text>)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
