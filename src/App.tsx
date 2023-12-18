import React, { useState } from "react";
import { Container } from "./styles/styles";

import { IoIosRemoveCircleOutline, IoIosAddCircle } from "react-icons/io";
import Calendar from "./assets/calendar.svg";

export function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const remover = (index: string) => {
    const Removed = todos.filter((removed) => removed !== index);
    setTodos(Removed);
  };

  const checkbox = (index: string) => {
    const Completed = todos.filter((completed) => completed === index);
    setTodos(Completed);
  };

  const filtrar = (index: string) => {
    setFilter(index);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo === "completed";
    } else if (filter === "In Progress") {
      return true;
    } else if (filter === "removed") {
      return todo === "removed";
    } else {
    }
  });

  return (
    <>
      <Container>
        <div className="main-container">
          <div className="filter">
            <header>
              <img src={Calendar} alt="" />
              <h1>Today</h1>
              <select
                id="selectBox"
                className="filter-style"
                onChange={(e) => filtrar(e.target.value)}
              >
                <option value="completed">Completed</option>
                <option value="In Progress"> In Progress </option>
                <option value="removed">Removed</option>
              </select>
            </header>
          </div>

          {filteredTodos.map((todo, id) => (
            <div className="inputData" key={id}>
              <li>
                <div className="leftInfo">
                  <input type="checkbox" onChange={() => checkbox(todo)} />
                  <p>{todo}</p>
                </div>
                <button onClick={() => remover(todo)} type="button">
                  <IoIosRemoveCircleOutline color="red" size={24} />
                </button>
              </li>
            </div>
          ))}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!!value) {
                setTodos([...todos, value]);
                setValue("");
              }
            }}
          >
            <div className="teste">
              <button>
                <IoIosAddCircle size={24} color="blue" />
              </button>
              <input
                type="text"
                id="new-task-title"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Create New Item"
                required
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
