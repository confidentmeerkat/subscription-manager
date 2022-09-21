import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-sm">Welcome</h1>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
