import { Place } from "./components/Place/Place";
import { Navbar } from "./components/Navbar/Navbar";
import { Shows } from "./components/Shows/Shows";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Place /> */}
      <Shows />
    </div>
  );
}

export default App;
