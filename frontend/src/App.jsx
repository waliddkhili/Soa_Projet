import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}
