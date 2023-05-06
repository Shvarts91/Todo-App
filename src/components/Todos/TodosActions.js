import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodos} title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
        title="Clear Completed Todos"
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}
export default TodosActions
