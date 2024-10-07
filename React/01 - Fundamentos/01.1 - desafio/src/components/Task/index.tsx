import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

interface TaskProps {
  children: string;
  isCompleted: boolean;
  onDeleteTask: () => void;
  onTaskIsCompleted: () => void;
}

export function Task({ children, isCompleted, onDeleteTask, onTaskIsCompleted }: TaskProps) {
  return (
    <li className={styles.task}>
      <input type="checkbox" checked={isCompleted} onChange={onTaskIsCompleted} readOnly  />
      <span>{children}</span>

      <button onClick={onDeleteTask}><Trash size={24} /></button>
    </li>
  );
}
