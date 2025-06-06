import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import MHome from "./Mobile/Routes/MHome";

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
  const isTablete = useMediaQuery({ query: "(max-width: 1220px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={isDesktop ? <Home /> : <MHome />}>
          <Route path={"/project/:id"} element={<Project />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
