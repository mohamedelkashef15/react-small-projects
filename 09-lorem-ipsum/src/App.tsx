/*
  Tasks & Logic 
    - update state insdie input 
    - onClick to generate paragraphs according to value of input
    - set min and max inside input
*/

import { useState } from "react";
import texts from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCount(+e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setParagraphs(texts.slice(0, count));
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
              min={1}
              max={texts.length}
              value={count}
              onChange={handleChange}
            />
            <button className="btn" type="submit">
              Generate
            </button>
          </div>
        </form>
        <article>
          {paragraphs.map((paragraph, i) => {
            return (
              <div key={i}>
                <p>{paragraph}</p>
              </div>
            );
          })}
        </article>
      </div>
    </main>
  );
}

export default App;
