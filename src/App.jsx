import './App.css';
import { Post } from './Post';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <Post
          author="Ewerton Tavares"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo maxime doloremque voluptates deleniti repudiandae, quas delectus necessitatibus non eligendi deserunt nihil ut natus inventore id praesentium quos, quia enim."
        />
        <Post
          author="Jeff Bezos"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo maxime doloremque voluptates deleniti repudiandae, quas delectus necessitatibus non eligendi deserunt nihil ut natus inventore id praesentium quos, quia enim."
        />
      </header>
    </div>
  );
}
