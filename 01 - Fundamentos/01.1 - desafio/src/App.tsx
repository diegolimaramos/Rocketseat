import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Task } from "./components/Task";

import { PlusCircle } from "@phosphor-icons/react";
import Clipboard from "./assets/Clipboard.svg";

import styles from "./App.module.css";

interface TasksListProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasksList, setTasksList] = useState<TasksListProps[]>([]);
  const [newTask, setNewTask] = useState('');
  const [count, setCount] = useState(0);
 
  function handleCreateTask() {
    if (newTask === "" ) {
      return;
    }

    const newTaskInserted: TasksListProps = {
      id: Math.random(),
      title: newTask,
      isCompleted: false,
    };

    setTasksList([...tasksList, newTaskInserted]);
    setCount(count + 1);
    setNewTask("");
  }

  function handleDeleteTask(id: number) {
    const deletedTask: TasksListProps[] = tasksList.filter((task) => task.id !== id);

    setTasksList(deletedTask);
    setCount(count - 1);
  }

  function handleTaskIsCompleted(id: number) {
    const completedTask: TasksListProps[] = tasksList.map((task) => {     
      if(task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      } else {
        return task;
      }
    })

    setTasksList([...completedTask])
  }

  const checkedTasksCounter = tasksList.reduce((prevValue, currentTask) => {
    if (currentTask.isCompleted) {
      return prevValue + 1
    }
    return prevValue;
  }, 0);

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.inputArea}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />

          <button onClick={handleCreateTask}>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <span>
              Tarefas criadas{" "}
              <span className={styles.count}>{tasksList.length}</span>
            </span>
            <span>
              {count === 0 ? (
                <>
                  Concluídas <span className={styles.count}>{count}</span>
                </>
              ) : (
                <>
                  Concluídas{" "}
                  <span className={styles.count}>
                    {checkedTasksCounter} de {tasksList.length}
                  </span>
                </>
              )}
            </span>
          </div>
          
          <div className={styles.containerTasks}>
            {tasksList.length > 0 ? (
              <ul className={styles.contentTask}>
                {tasksList.map((task) => (
                  <Task
                    key={task.id}
                    isCompleted={task.isCompleted}
                    onDeleteTask={() => handleDeleteTask(task.id)}
                    onTaskIsCompleted={() => handleTaskIsCompleted(task.id)}
                  >
                    {task.title}
                  </Task>
                ))}
              </ul>
            ) : (
              <>
                <img src={Clipboard} alt="Clipboard" />
                <div>
                  <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                  </p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
