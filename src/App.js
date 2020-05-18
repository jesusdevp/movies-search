import React, { useState } from "react";
import Search from "./Components/Search";

function App() {
  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=2130b0bb";

  const handleInput = (e) => {
    let s = e.target.value;

    setstate((prevState) => {
      return { ...prevState, s: s };
    });

    console.log(s);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies Search</h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;
