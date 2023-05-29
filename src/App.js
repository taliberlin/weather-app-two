import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="mt-1">
          🤘🏼 This website was coded by Tali Berlin and is{" "}
          <a
            href="https://github.com/taliberlin/weather-app-two"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
