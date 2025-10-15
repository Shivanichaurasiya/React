import React from "react";

const TodoList = React.memo(({todos, onToggleTodo, onDeleteTodo}) => {
          console.log('Rendering TodoList')

      
      return  (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span onClick={() => onToggleTodo(todo.id)} 
                
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
             }}

                >  {todo.text} </span>

              <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>

            </li>
          ))}
        </ul>
      )
}

)

export default TodoList;