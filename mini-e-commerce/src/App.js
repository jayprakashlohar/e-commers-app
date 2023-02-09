import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Header/Navbar";
import SimpleSlider from "./Components/Slider/SimpleSlider";
import { AutoSlider } from "./Components/Slider/AutoSlider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AutoSlider />
      <SimpleSlider />
    </div>
  );
}

export default App;
