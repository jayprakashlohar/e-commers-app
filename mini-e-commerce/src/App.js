import "./App.css";
import { Navbar } from "./Components/Header/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { AllRoutes } from "./Components/AllRoutes/AllRoutes";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <AllRoutes />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
