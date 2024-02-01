import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error(`Error fetching todos: ${error}`);
      }
    };
    fetchData();
  }, []);
  // fetch("http://localhost:3000/todos").then(async (res) => {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
