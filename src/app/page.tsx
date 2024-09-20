import { BoardTasks } from './components/BoardTasks';
import { Header } from './components/Header';
import './page.scss';

export default function Home() {
  return (
    <div className='container'>
      <Header/>
      <BoardTasks/>
      <button type='button' className='btn-add-task'>Adicionar nova tarefa</button>
    </div>
  );
}
