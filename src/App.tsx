import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Portfolio from "./Routes/Portfolio";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/portfolio'} element={<Portfolio/>}></Route>
            <Route path={'/'} element={<Home/>}>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
