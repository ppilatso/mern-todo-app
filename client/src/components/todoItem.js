import React from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const toggleComplete = () => {
    updateTodo(todo._id, { ...todo, completed: !todo.completed });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;