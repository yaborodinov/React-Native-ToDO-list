import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { useState } from 'react';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

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
        <FlatList 
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => <Todo text={item.title}/>}
        />        
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
