import ReactLogo from "/react-js.gif";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center  h-dvh">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={ReactLogo} className="logo react" alt="React logo" />
        </a>
        <div>
          <h1>React</h1>
          <p>Starter template</p>
        </div>
      </div>
    </div>
  );
}

export default App;
