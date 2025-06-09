import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import MHome from "./Mobile/Routes/MHome";
import MProject from "./Mobile/Routes/MProject";
import Project from "./Routes/Project";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1220px)",
  });
  console.log(isDesktop);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={isDesktop ? <Home /> : <MHome />}>
          <Route path={"project/:id"} element={isDesktop ? <Project /> : <MProject />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
