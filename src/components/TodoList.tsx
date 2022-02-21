import React from "react";
import { ITodo } from "../interfaces/interfaces";

type TodoListProps = {
  todos: ITodo[]
  onToggle(id:number): void
  onRemove(id:number): void
}

const labelStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  padding: '1rem',
  background: '#f3f3f3',
}

var spanStyle = {
  textDecoration: 'none'
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {

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
        if(todo.completed){
          spanStyle = {textDecoration: 'line-through'}
        } else {
          spanStyle = {textDecoration: 'none'}
        }          
        return (
          <li className="todo" key={todo.id} style={{marginBottom:'1rem'}}>
            <label style={labelStyle}>
              <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
              <span style={spanStyle}>{todo.title}</span>
              <i className="material-icons " style={{zIndex:'2'}} onClick={(event) => removeHandler(event, todo.id)}>delete</i>
            </label>
          </li>
            )
          }
        )
      }
    </ul>
  )
}

  
    
