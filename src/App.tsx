import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Project from "./Routes/Project";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}>
            <Route path={'/project/:id'} element={<Project/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
