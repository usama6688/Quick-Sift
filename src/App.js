import { React } from "react";
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Main from "./component/Main";
import Desktop from "./component/Desktop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/dashboard" exact element={<Desktop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
