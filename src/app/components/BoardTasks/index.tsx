'use client'
import { useState } from 'react';
import { IoCheckboxOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
import './board.scss';

interface TasksProps{
  id: number
  isChecked: boolean
  title: string
}

export const BoardTasks = () => {
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: 0,
      isChecked: false,
      title: 'Lavar as mãos'
    },
    {
      id: 1,
      isChecked: true,
      title: 'Fazer um bolo'
    }
  ])

  const handleCheckTask = (taskId: number) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    )
  }

  return(
    <section>
      <span>Suas tarefas de hoje</span>
      {tasks.map((task => (
        <div className='task' key={task.id}>
          {task.isChecked ? (
            <IoCheckboxOutline size={24} 
              className='checked' 
              onClick={() => handleCheckTask(task.id)}
            />
          ) : (
            <MdCheckBoxOutlineBlank 
              size={24} 
              onClick={() => handleCheckTask(task.id)}
            />
          )} 
          <span className={task.isChecked ? 'checked' : ''}>{task.title}</span>
          <SlTrash size={22} className='trash'/>
        </div>
      )))}
      <span>Tarefas finalizadas</span>
    </section>
  )
}