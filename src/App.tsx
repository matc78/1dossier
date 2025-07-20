import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ThemeDemo } from "./components/ThemeDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="bg-[#2bff9b] text-white p-4 mt-6 rounded-xl text-center">
        Ceci est un test avec Tailwind
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Démonstration du système de thème */}
      <ThemeDemo />
    </>
  );
}

export default App;
