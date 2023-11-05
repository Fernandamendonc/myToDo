import { useState } from 'react'
import styles from './styles.module.css'
import { ToDo } from '../ToDo'

interface ModalCriarProjetoProps {
  open: boolean;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalCriarProjeto({ setToDos, setOpen,open }:ModalCriarProjetoProps) {
  const [newTaskCreateText, setNewTaskCreateText] = useState('')
  const [newDescriptionCreateText, setNewDescriptionCreateText] = useState('')

  function handleCreateNewTask(e: any) {
    e.preventDefault()

    if(newTaskCreateText === '') {
      return
    }
    const newTodo: ToDo = {
      id: Math.floor(Math.random() * 1000) + 1,
      content: newTaskCreateText,
      description: newDescriptionCreateText,
      isCompleted: false
    }

    setToDos((oldSate) => [...oldSate, newTodo])

    setNewTaskCreateText('')
    setNewDescriptionCreateText('')

  }

  function handleNewTaskChange(e: any) {
    setNewTaskCreateText(e.target.value)
  }

  function handleNewDescriptionChange(e: any) {
    setNewDescriptionCreateText(e.target.value)
  }

  if(open) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <form onSubmit={handleCreateNewTask}>
            <section>
              <div>
                <input 
                  type='text' 
                  value={newTaskCreateText} 
                  name='toDos' 
                  className={styles.inputFormCreateTask} 
                  placeholder='Nome da tarefa'
                  onChange={handleNewTaskChange}
                />
              </div>
  
              <div>
                <input 
                  type='text' 
                  value={newDescriptionCreateText} 
                  name='toDos' 
                  className={styles.inputFormCreateTask} 
                  placeholder='Descrição da tarefa (opcional)'
                  onChange={handleNewDescriptionChange}
                />
              </div>
            </section>
            <div className={styles.buttonSubmitForm}>
              <button className={styles.buttonSubmitFormCancel} onClick={() => setOpen(false)}>Cancelar</button>
              <button className={styles.buttonSubmitFormSave}>Salvar tarefa</button>
            </div>
          </form>
        </div>
      </div>
  
      
    )
  }


  return null
    
}