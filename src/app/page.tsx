import './page.scss'
import { Header } from './components/Header';
import { BoardTasks } from './components/BoardTasks';

export default function Home() {
  return (
    <>
      <Header/>
      <BoardTasks/>
    </>
  );
}
