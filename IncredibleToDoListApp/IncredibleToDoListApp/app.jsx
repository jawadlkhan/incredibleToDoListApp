/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaview, StyleSheet} from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <SafeAreaview>
      <ToDoForm />
      <ToDoList />
    </SafeAreaview>
  );
}

const styles = StyleSheet.create({});

export default App;