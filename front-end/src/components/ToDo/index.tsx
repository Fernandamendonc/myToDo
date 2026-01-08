import { useState } from 'react'
import styles from './styles.module.css'
import { Task } from '../Task'
import { ModalCriarProjeto } from '../ModalCriarProjeto'

export interface ToDo{
  id: number
  content: string
  isCompleted: boolean
  description: string
}

export interface modalProps{
  open:boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ToDo({ open, setOpen }:modalProps) {
  const [toDos, setToDos] = useState<ToDo[]>([])
  
  const todosIsCompleted = toDos.filter((toDo) => (toDo.isCompleted)).length

  function handleDeleteTask (id:number){
    const toDosFilter = toDos.filter((toDo) => (
      toDo.id !== id
    ))
    setToDos(toDosFilter)
  }

  function handleCompletedTask (id:number) {
    const toDoCompletoTask = toDos.map((toDo) => toDo.id === id ? ({
      ...toDo, 
      isCompleted: !toDo.isCompleted
    }): toDo
    )

    setToDos(toDoCompletoTask)
  }

  return (
    <div className={styles.container}>
      <ModalCriarProjeto setToDos={setToDos} setOpen={setOpen} open={open}/>
       
      <div className={styles.contentTitle}>
        <span className={styles.totalTitulo}>
          Total
          <strong className={styles.totalTasks}>{toDos.length}</strong>
        </span>
        <span className={styles.totalTitulo}>
          Concluídas 
          <div className={styles.totalTasksConcluded}>
            {
              toDos.length <= 0 
                ? 
                <strong>{todosIsCompleted}</strong> 
                : 
                <strong>
                  {todosIsCompleted} de {toDos.length}
                </strong>
            }
          </div>
        </span>
      </div>

      {
        toDos.length <= 0 ? 
          <div className={styles.noContent}>
            <strong>
              Você ainda não tem tarefas cadastradas
            </strong>
            <span>
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        :
        <>
          {toDos.map(toDo => {
            return (
              <Task 
                key={toDo.id}
                toDo={toDo}
                handleDeleteTask={handleDeleteTask}
                handleCompletedTask={handleCompletedTask}
              />
            )
          })}
          </>
      }
    </div>
  )
}