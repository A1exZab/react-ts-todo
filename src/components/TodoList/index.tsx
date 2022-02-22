import React from "react";
import styles from "./styles";
import ITodo from "../../interfaces/interfaces";

type TodoListProps = {
  todos: ITodo[]
  onToggle(id:number): void
  onRemove(id:number): void
}

const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {

  if (todos.length === 0) {
    return <p className="center">Пока дел нет</p>
  }

  const removeHandler = (event: React.MouseEvent,id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => {               
        return (
          <li className="todo" key={todo.id} style={{marginBottom:'1rem'}}>
            <label style={styles.labelStyle}>
              <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
              <span style={todo.completed?styles.spanStyleAfter:styles.spanStyleBefore}>{todo.title}</span>
              <i className="material-icons " style={styles.iStyle} onClick={(event) => removeHandler(event, todo.id)}>delete</i>
            </label>
          </li>
            )
          }
        )
      }
    </ul>
  )
}

export default TodoList

  
    
