import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/container";
import Controls from "./components/Controls";

function App() {
  return (
    <center style={{ marginTop: "10%" }}>
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          <DisplayCounter></DisplayCounter>
          <Controls></Controls>
        </div>{" "}
      </Container>
    </center>
  );
}

export default App;
