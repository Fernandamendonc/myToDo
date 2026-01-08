import styles from './styles.module.css'
import trashImg from '../../assets/iconTrash.svg'
import { ToDo } from '../ToDo'
import { format } from 'date-fns'

interface TaskProps {
  toDo: ToDo
  handleDeleteTask: (id:number) => void
  handleCompletedTask: (id:number) => void
}

const date = new Date()
const dateFormat = format(date, "dd/MMM")

export function Task({ 
    toDo, 
    handleDeleteTask, 
    handleCompletedTask }: TaskProps) {

  return (
    <div className={styles.container}>
        <div className={styles.sectionTask}>
          <input 
            type='checkbox' 
            checked={toDo.isCompleted} 
            onClick={() => (handleCompletedTask(toDo.id))} 
            className={styles.contentCheckbox} 
          />
          <div className={styles.displayTask}>
            <span 
              className={`${styles.contentTarefa} 
              ${
                toDo.isCompleted ? 
                styles.taskCompleted
                : ''
              }`
              }
            >
              {toDo.content}
            </span>
            <span 
              className={`${styles.contentTarefa} 
              ${
                toDo.isCompleted ? 
                styles.taskCompleted
                : ''
              }`
              }
            >
              {toDo.description}
            </span>
          </div>
        </div>

        <div className={styles.secondDiv}>
          <div>
            {`${dateFormat}`}
          </div>
          <button 
            type='button' 
            onClick={() => (handleDeleteTask(toDo.id))}
          >
            <img src={trashImg} className={styles.imgTrashIcon}/>
          </button>
        </div>

    </div>
  )
}