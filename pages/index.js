import { Component, useEffect, useState } from "react";
import Todo from "../components/Todo";
// import Todo from "../components/Todo";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Home() {
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

  const moveUp = (idx) => {};

  const moveDown = (idx) => {};

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
        />
      ))
    );
  }, [todo]);

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
        {/* Todos */}
        {/* { Example 1 } */}

        {output}
        {/* Example 2 */}
        {/*
          <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
            <span className="me-auto">Todo with buttons</span>

            <button className="btn btn-success">
              <IconCheck />
            </button>
            <button className="btn btn-secondary">
              <IconArrowUp />
            </button>
            <button className="btn btn-secondary">
              <IconArrowDown />
            </button>
            <button className="btn btn-danger">
              <IconTrash />
            </button>
          </div>
      */}
        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All (2) </span>
          <span className="text-warning">Pending (2) </span>
          <span className="text-success">Completed (0)</span>
        </p>
        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Pichayoot Hunchainao 640610653
        </p>
      </div>
    </div>
  );
}
