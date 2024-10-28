import { useState } from "react";
import { Nav } from "./components/nav";
import { Page } from "./components/Page";

function App() {
  return (
    <>
      <div className="nav">
        <Nav />
      </div>
      <div className="page">
        <Page />
      </div>
    </>
  );
}

export default App;
