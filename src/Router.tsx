import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Project from "./Routes/Project";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Home />}>
          <Route path={"project/:id"} element={<Project />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
