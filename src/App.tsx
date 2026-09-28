import "./App.css";

function App() {
  const styleDiv = {
    margin: "10px",
    border: "1px solid black",
    backgroundColor: "blue",
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
          style={{ ...styleDiv, color: "blue", backgroundColor: "lightblue" }}
        >
          Ana
        </div>
        <div
          style={{ ...styleDiv, color: "#09220e", backgroundColor: "#fae0e0" }}
        >
          Anderson
        </div>
        <div
          style={{ ...styleDiv, color: "blue", backgroundColor: "lightblue" }}
        >
          Ederson
        </div>
        <div
          style={{ ...styleDiv, color: "blue", backgroundColor: "lightblue" }}
        >
          Rebeca
        </div>
        <div
          style={{ ...styleDiv, color: "blue", backgroundColor: "lightblue" }}
        >
          Tony
        </div>
      </div>
    </>
  );
}

export default App;
