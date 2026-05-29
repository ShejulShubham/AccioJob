import React from 'react';

const TodoItem = ({ todo, toggleCompleted }) => {


  return (
    <li style={{
      ...styles.item,
      borderLeft: todo.completed ? '5px solid #4CAF50' : '5px solid #FF9800'
    }}>
        <input type='checkbox' onChange={()=>toggleCompleted(todo._id, todo.completed)} checked={todo.completed} />
      <span style={{
        ...styles.text,
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#333'
      }}>
        {todo.title}
      </span>
      <span style={{
        ...styles.badge,
        backgroundColor: todo.completed ? '#E8F5E9' : '#FFF3E3',
        color: todo.completed ? '#2E7D32' : '#E65100'
      }}>
        {todo.completed ? 'Done' : 'Pending'}
      </span>
      <button >Delete</button>
    </li>
  );
};

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 15px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  },
  text: {
    fontSize: '16px',
    wordBreak: 'break-word'
  },
  badge: {
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
};

export default TodoItem;