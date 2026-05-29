import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos,toggleCompleted}) => {

  return (
    <div className="todo-container" style={styles.container}>
      <h2 style={styles.header}>My Todo List</h2>
      {todos.length === 0 ? (
        <p style={styles.noTodos}>No todos found. Time to relax!</p>
      ) : (
        <ul style={styles.list}>
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} toggleCompleted={toggleCompleted}/>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  noTodos: {
    textAlign: 'center',
    color: '#777',
    fontStyle: 'italic'
  }
};

export default TodoList;