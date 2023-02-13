import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Header/Navbar";
import SimpleSlider from "./Components/Slider/SimpleSlider";
import { AutoSlider } from "./Components/Slider/AutoSlider";
import { Login } from "./Components/Pages/Login";
import { Signup } from "./Components/Pages/Signup";
import { ChakraProvider } from "@chakra-ui/react";
import { AllRoutes } from "./Components/AllRoutes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <AutoSlider /> */}
      {/* <SimpleSlider /> */}
      {/* <Login/> */}
      <ChakraProvider>
        <Navbar />
        {/* <Signup /> */}
        {/* <Login /> */}
        <AllRoutes/>
      </ChakraProvider>
    </div>
  );
}

export default App;
