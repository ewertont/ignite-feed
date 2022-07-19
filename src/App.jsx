import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ewerton Tavares"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo maxime doloremque voluptates deleniti repudiandae, quas delectus necessitatibus non eligendi deserunt nihil ut natus inventore id praesentium quos, quia enim."
          />
          <Post
            author="Jeff Bezos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo maxime doloremque voluptates deleniti repudiandae, quas delectus necessitatibus non eligendi deserunt nihil ut natus inventore id praesentium quos, quia enim."
          />
        </main>
      </div>
    </div>
  );
}
