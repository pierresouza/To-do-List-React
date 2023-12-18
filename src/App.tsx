import React, { useState } from "react";
import { Container } from "./styles/styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

import Calendar from "./assets/calendar.svg";

export function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const remover = (index: string) => {
    const Removed = todos.filter((Removed) => Removed !== index);
    setTodos(Removed);
    console.log(Removed);
  };
  const checkbox = (index: string) => {
    const Completed = todos.filter((Completed) => Completed === index);
    setTodos(Completed);
    console.log(Completed);
  };

  const filtrar = (index: string) => {
    let filtro = todos.filter((tarefas) => tarefas);
    console.log("filtro : ", filtro);
    setTodos(filtro);

    if (index == "todos") {
      setTodos(todos);
    }
  };

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
                <option value="">...</option>
                <option value="completed">Complete</option>
                <option value="todos"> In Progress </option>
                <option value="removed">Removed</option>
              </select>
            </header>
          </div>

          {todos.map((todo, id) => (
            <div key={id} className="inputData">
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
              {
                /*  campo que coleta informação digitada e atribui ela ao array times */
              }
              event.preventDefault();
              if (!!value) {
                setTodos([...todos, value]);
                setValue("");
              }
              setTodos([...todos, value]);
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
