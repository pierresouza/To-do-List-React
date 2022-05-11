import React, { useState } from "react";

import { Container } from "./styles/styles";

export function App() {
  const meusTimes = [
    " corinthians ",
    " santos ",
    " avai ",
    " America-MG ",
    " bragantino ",
    " são paulo ",
    " botafogo ",
    " internacional ",
    " curitiba ",
    " palmeiras",
  ];

  const [times, setTimes] = useState<string[]>(meusTimes);
  const [dados, setDados] = useState<string>("");

  meusTimes.sort(function (a, b) {
    return a.localeCompare(b);
  });

  const remover = (index: string) => {
    const clubes = times.filter((jogadores) => jogadores !== index);
    setTimes(clubes);
  };

  
  function handleClick(){
    console.log("pegou")
  }

  
  return (
    <>
      <Container>
      <div>
          <select onClick={handleClick}>
            <option value="" onClick={handleClick}>todos os times</option>
            <option value="" onClick={handleClick}>times com a letra A</option>
            <option value="" onClick={handleClick}>times com a letra S</option>
            <option value="" onClick={handleClick}>times com a letra C</option>
          </select>
      </div>
      

        {times.map((clubes) => (
          <div>
            <p> {clubes} <button onClick={() => remover(clubes)} type="button"> remover </button> </p>
          </div>
        ))}
          
        <form onSubmit={(event) => { {/*  campo que coleta informação digitada e atribui ela ao array times */} 
            event.preventDefault();
            if (!!dados) {
              setTimes([...times, dados]);
              setDados("");
            }
            setTimes([...times,dados]);
          }}>
          <div>
            <button >
              Adicionar
            </button>
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
