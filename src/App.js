import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />
        <footer className="mt-1">
          🤘🏼 This website was coded by{" "}
          <a
            href="https://www.linkedin.com/in/taliberlin/"
            target="_blank"
            rel="noreferrer"
          >
            Tali Berlin
          </a>{" "}
          and is{" "}
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
