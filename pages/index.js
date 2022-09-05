import { IconMoon, IconSunHigh } from "@tabler/icons";
import { useEffect, useState } from "react";
import { ThemeContext } from "../../../react/lecture12/contexts/ThemeContext";
import Todo from "../components/Todo";
// import Todo from "../components/Todo";

export default function Home() {
  //---------------------------------------------------------------------
  const themes = {
    light: {
      name: "light",
      background: "white",
      foreground: "black",
    },
    dark: {
      name: "dark",
      background: "black",
      foreground: "white",
    },
  };

  const [selTheme, setSelTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (selTheme.name === "light") {
      setSelTheme(themes.dark);
    } else {
      setSelTheme(themes.light);
    }
  };
  //---------------------------------------------------------------------

  const [todo, setTodo] = useState([]);

  const deleteTodo = (idx) => {
    setTodo(todo.filter((_, i) => i !== idx));
  };

  const markTodo = (idx) => {
    setTodo(
      todo.map((v, i) => {
        return {
          title: v.title,
          completed: idx === i ? !v.completed : v.completed,
        };
      })
    );
  };

  const onKeyUpHandler = (e) => {
    if (e.key !== "Enter") return;
    if (e.target.value === "") {
      alert("asdasdasd");
      return;
    }
    const newTodo = [{ title: e.target.value, completed: false }, ...todo];
    setTodo(newTodo);
  };

  const moveUp = (idx) => {
    if (idx > 0) {
      const newTodo = [...todo];
      const temp = newTodo[idx];
      newTodo[idx] = newTodo[idx - 1];
      newTodo[idx - 1] = temp;
      setTodo(newTodo);
    }
  };

  const moveDown = (idx) => {
    if (idx < todo.length - 1) {
      const newTodo = [...todo];
      const temp = newTodo[idx];
      newTodo[idx] = newTodo[idx + 1];
      newTodo[idx + 1] = temp;
      setTodo(newTodo);
    }
  };

  const [output, setOutput] = useState([]);
  useEffect(() => {
    setOutput(
      todo.map((c, i) => (
        <Todo
          title={c.title}
          completed={c.completed}
          key={i}
          onMark={() => markTodo(i)}
          ondelete={() => deleteTodo(i)}
          onMoveup={() => moveUp(i)}
          onMovedown={() => moveDown(i)}
        />
      ))
    );
  }, [todo]);

  useEffect(() => {
    const todoStr = localStorage.getItem("react-todo");
    if (!todoStr) {
      setTodo([]);
    } else {
      setTodo(JSON.parse(todoStr));
    }
  }, []);

  const [isFirstRender, setIsfirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsfirstRender(false);
      return;
    } else {
      saveTodo();
    }
  }, [todo]);
  const saveTodo = () => {
    const todoStr = JSON.stringify(todo);
    localStorage.setItem("react-todo", todoStr);
  };

  return (
    <div>
      {/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        {/* App header */}
        <p className="display-4 text-center fst-italic m-4">
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onKeyUp={onKeyUpHandler}
        />
        <button className="btn btn-primary" onClick={toggleTheme}>
          {selTheme.name === "light" && <IconSunHigh />}
          {selTheme.name === "dark" && <IconMoon />}
        </button>
        {/* Todos */}
        {output}
        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({todo.length}) </span>
          <span className="text-warning">
            Pending ({todo.filter((todo) => !todo.completed).length}){" "}
          </span>
          <span className="text-success">
            Completed ({todo.filter((todo) => todo.completed).length})
          </span>
        </p>
        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Pichayoot Hunchainao 640610653
        </p>
      </div>
    </div>
  );
}
