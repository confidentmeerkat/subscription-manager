import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
