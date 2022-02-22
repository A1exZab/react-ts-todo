import React, {useRef} from "react";
import styles from './styles'

interface TodoFormProps {
  onAdd(title: string):void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  
  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter'){
      props.onAdd(ref.current!.value)
      ref.current!.value=''
    }
  }

  return (
    <div className="input-field" style={styles.divStyle}>
      <input 
        ref={ref}  
        type="text" 
        id="title" 
        placeholder="Введите название дела" 
        onKeyPress={keyPressHandler}/>
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  )
}

export default TodoForm