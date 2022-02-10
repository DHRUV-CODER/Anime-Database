import React from "react";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Search />
      <center>
        <footer className="footer mt-auto py-3 bg-transparent">
          <div className="container">
            <span className="text-muted">
              Made By : <strong>Hails</strong>
            </span>
          </div>
        </footer>
      </center>
    </div>
  );
};

export default App;
