//import { useState } from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  )
  //   const [inputText, setInputText] = useState([])

  //   const postInputText = (todo) => {
  //     setInputText([...inputText, todo])
  //   }

  //   const deleteInput = (id) => {
  //     debugger
  //     const copyInputText = [...inputText]
  //     copyInputText.splice(id, 1)
  //     setInputText(copyInputText)
  //   }

  //   return (
  //     <div>
  //
  //       <TodoForm onClick={postInputText} />
  //       {inputText.length === 0 ? (
  //         <h1>Todo list isempty</h1>
  //       ) : (
  //         inputText.map((text, index) => (
  //           <Todo
  //             key={text[index]}
  //             id={index}
  //             deleteInput={deleteInput}
  //             text={text}
  //           />
  //         ))
  //       )}
  //     </div>
  //   )
}

export default TodoList
