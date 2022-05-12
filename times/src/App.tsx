import React, { useState } from "react";

import { Container } from "./styles/styles";

export function App() {
  const meusTimes = [
    "America-MG",
    "Avai",
    "Botafogo",
    "Bragantino",
    "Corinthians",
    "Curitiba",
    "Internacional",
    "Palmeiras",
    "Santos",
    "São Paulo",
  ];

  const [times, setTimes] = useState(meusTimes);
  const [dados, setDados] = useState<string>("");

  meusTimes.sort(function (a, b) {
    return a.localeCompare(b);
  });

  const remover = (index: string) => {
    const clubes = times.filter((jogadores) => jogadores !== index);
    setTimes(clubes);
  };

  const filtrar = (index: string) => {
    let filtro = meusTimes.filter((timesComS => timesComS.charAt(0) == index))
    console.log("filtro : ", filtro)
    setTimes(filtro)

    if(index == "todos"){
      setTimes(meusTimes)
    }
    console.log(index)
  };

  return (
    <>
      <Container>
        <div>
          <select id="selectBox" onChange={(e) => filtrar(e.target.value)}>
            <option value="todos"> todos os times </option>
            <option value="A">times com a letra A</option>
            <option value="S">times com a letra S</option>
            <option value="C">times com a letra C</option>
            <option value="B">times com a letra B</option>
            <option value="I">times com a letra I</option>
          </select>
        </div>

        {times.map((clubes) => (
          <div>
            <p>
              <input type="checkbox" />
              {clubes}
              <button onClick={() => remover(clubes)} type="button">
                remover
              </button>
            </p>
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
          <div>
            <button>Adicionar</button>
            <input
              type="text"
              id="new-task-title"
              value={dados}
              onChange={(event) => setDados(event.target.value)}
              placeholder="Digite o nome de um time"
              required
              autoComplete="off"
            />
          </div>
        </form>
      </Container>
    </>
  );
}
