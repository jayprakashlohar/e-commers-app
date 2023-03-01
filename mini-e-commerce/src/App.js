import "./App.css";
import { Navbar } from "./Components/Header/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { AllRoutes } from "./Components/AllRoutes/AllRoutes";
import { Footer } from "./Components/Footer/Footer";
import { Checkout } from "./Components/Pages/Checkout";
import { Payment } from "./Components/Payment/Payment";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <AllRoutes />
        {/* <Checkout/> */}
        {/* <Payment /> */}
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
