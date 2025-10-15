import React, { useState, useCallback } from 'react';
import TodoList from './TodoList';

const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
    { id: 3, text: 'Do laundry', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() === '') return;

    const newId =Date.now();
    console.log('new todo id',newId);

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: newId,
       
        text: newTodo.trim(),
        completed: false,
      }, 
    ]);
   

    setNewTodo('');
  }, [newTodo]);

  const handleToggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const handleInputChange = (e) => setNewTodo(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <h1>My Todo List</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoPage;