import React, { useState } from "react";
import Search from "./Components/Search";
import axios from "axios";

function App() {
  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then((data) => {
        console.log(data);
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setstate((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies Search</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
