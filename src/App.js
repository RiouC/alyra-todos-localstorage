import { useState, useEffect } from "react";
import Todos from "./components/Todos";

function App() {
    const getInitialMode = () => JSON.parse(window.localStorage.getItem("theme-mode")) || false;
    const [darkMode, setDarkMode] = useState(getInitialMode);

    const handleCheckboxChange = (event) => {
        setDarkMode(event.target.checked);
    };

    useEffect(() => {
        window.localStorage.setItem("theme-mode", JSON.stringify(darkMode));
    });

    return (
        <div className={`App min-vh-100 min-vw-100 d-flex flex-column container ${darkMode ? "bg-dark text-light" : ""}`}>
          <div className="container my-4">
            <h1 className="text-center">ToDos App</h1>
            <Todos darkMode={darkMode} />
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="activate"
                checked={darkMode}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="activate"> Mode Sombre </label>
            </div>
          </div>
        </div>
    );
}

export default App;
