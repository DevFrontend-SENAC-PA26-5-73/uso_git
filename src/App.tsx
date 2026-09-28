import "./App.css";

function App() {
  const styleDiv = {
    margin: "10px",
    border: "1px solid black",
    backgroundColor: "red",
    width: "100px",
    height: "100px",
  };

  
  return (
    <>
      <h1>Uso do Git</h1>
      <div className="container">
        <div
          style={{ ...styleDiv, color: "blue", backgroundColor: "lightblue" }}
        >
          Adryan
        </div>
        <div
          style={{ ...styleDiv, color: "black", backgroundColor: "red" }}
        >
          Anã Clara
        </div>
        <div
          style={{ ...styleDiv, color: "#09220e", backgroundColor: "#fae0e0" }}
        >
          Anderson
        </div>
        <div
          style={{ ...styleDiv, color: "red", backgroundColor: "black" }}
        >
          Ederson Flamengo
        </div>
        <div
          style={{ ...styleDiv, color: "blue", backgroundColor: "lightblue" }}
        >
          Rebeca
        </div>
        <div
          style={{ ...styleDiv, color: "yellow", backgroundColor: "green" }}
        >
          Tony O gigante
        </div>
      </div>
    </>
  );
}

export default App;
