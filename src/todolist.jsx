import React, { useState } from 'react';
import './Todolist.css';

function TodoList() {
  const [todos, setTodos] = useState([
    { name: 'making food', dueDate: '2023-12-23' }
  ]);
  const [newTodoName, setNewTodoName] = useState('');
  const [newTodoDueDate, setNewTodoDueDate] = useState('');

  const addTodo = () => {
    setTodos([...todos, { name: newTodoName, dueDate: newTodoDueDate }]);
    setNewTodoName('');
    setNewTodoDueDate('');
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <p>Todo List</p>
      <div className="todo-input-grid">
        <input 
          placeholder="Todo name"
          className="name-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <input 
          type="date" 
          className="due-date-input"
          value={newTodoDueDate}
          onChange={(e) => setNewTodoDueDate(e.target.value)}
        />
        <button 
          onClick={addTodo} 
          className="add-todo-button"
        >
          Add
        </button>
      </div>
      
      <div className="todo-grid">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <div>{todo.name}</div>
            <div>{todo.dueDate}</div>
            <button 
              onClick={() => deleteTodo(index)}
              className="delete-todo"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList
