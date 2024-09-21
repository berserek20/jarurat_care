import { useEffect, useState } from "react";
import "./App.css";
import Healthcare from "./components/Healthcare";
import { UpdateFormContext } from "./context/UpdateFormContext";
import UpdateForm from "./components/form/UpdateForm";

function App() {
  const [hideState, setHideState] = useState(true);
  const [id, setId] = useState(1);

  return (
    <div className="App">
      <UpdateFormContext.Provider
        value={{ hideState, setHideState, setId, id }}
      >
        <Healthcare />
        <UpdateForm />
      </UpdateFormContext.Provider>
    </div>
  );
}

export default App;
