/*
  Tasks & Logic 
    - update state insdie input 
    - onClick to generate paragraphs according to value of input
    - set min and max inside input
*/

import { useState } from "react";
import texts from "./data";

function App() {
  const [paragraphs, setParagraphs] = useState(texts);
  const [number, setNumber] = useState(1);
  const [isActive, setIsActive] = useState(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(+e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  function handleClick() {
    setIsActive(true);
  }

  return (
    <main className="main">
      <div className="container">
        <h1>tired of boring lorem ipsum?</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="paragraph">Paragraphs</label>
            <input
              type="number"
              name="paragraph"
              id="paragraph"
              value={number}
              min={1}
              max={texts.length}
              onChange={handleChange}
            />
            <button className="btn" type="submit" onClick={handleClick}>
              Generate
            </button>
          </div>
        </form>
        {isActive &&
          paragraphs.slice(0, number).map((text, i) => {
            return (
              <div key={i}>
                <p>{text}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}

export default App;
