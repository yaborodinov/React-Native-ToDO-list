import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';

export default function App() {
  return (
    <View>
      <Navbar title={'ToDo App'}/>
      <View style={styles.container}>
        <AddTodo/>
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
