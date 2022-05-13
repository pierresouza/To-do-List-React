import React, { useState } from "react";

import { Container } from "./styles/styles";

export function App() {

  const [times, setTimes] = useState<string[]>([]);
  const [dados, setDados] = useState<string>("");

  times.sort(function (a, b) {
    return a.localeCompare(b);
  });

  const remover = (index: string) => {
    const clubes = times.filter((jogadores) => jogadores !== index);
    setTimes(clubes);
  };

  const filtrar = (index: string) => {
    let filtro = times.filter((timesComS => timesComS.charAt(0) == index))
    console.log("filtro : ", filtro)
    setTimes(filtro)

    if(index == "todos"){
      setTimes(times)
    }
  };

  return (
    <>
      <Container>
        <div className="main-container">
        <div className="filter">
          <header>
            <img src="" alt="" />
            <h1>Today</h1>
          <select id="selectBox" className="filter-style" onChange={(e) => filtrar(e.target.value)}>
            <option value="todos"> todos os times </option>
            <option value="A">times com a letra A</option>
            <option value="clubes">times com a letra S</option>
          </select>
          </header>
        </div>

        {times.map((clubes) => (
          <div className="inputData">
            <div>
              <div className="leftInfo">
              <input type="checkbox" />
              <h3>{clubes}</h3>
              </div>
              <button onClick={() => remover(clubes)} type="button">
                remover
              </button>
            </div>
          </div>
        ))}

        <form
          onSubmit={(event) => {
            {
              /*  campo que coleta informação digitada e atribui ela ao array times */
            }
            event.preventDefault();
            if (!!dados) {
              setTimes([...times, dados]);
              setDados("");
            }
            setTimes([...times, dados]);
          }}
        >
          <div className="teste">
            <button>A</button>
            <input
              type="text"
              id="new-task-title"
              value={dados}
              onChange={(event) => setDados(event.target.value)}
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
