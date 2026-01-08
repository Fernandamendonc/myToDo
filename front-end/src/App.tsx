import './styles/global.css'
import styles from './styles/apps.module.css'
import { ToDo } from './components/ToDo'
import { useState } from 'react'
import iconAddImg from './assets/iconAdd.svg'

function App() {
  const [open, setOpen] = useState(false)

  function handleModal (){
    return setOpen(true)
  }

  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.containerHeader}>
            <h1>My To Do List</h1>
          </div>

          <div className={styles.containerTodo}>
            <ToDo open={open} setOpen={setOpen}/>
          </div>
          
          <div className={styles.containerOpenModal}>
            <button 
              onClick={handleModal} 
              className={styles.buttonAddTask}
            >
              <img src={iconAddImg} alt=''/>
            </button>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
