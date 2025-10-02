import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ActressesList from "./components/ActressesList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Cast Fetching</h1>
      <ActressesList />
    </>
  );
}

export default App;
