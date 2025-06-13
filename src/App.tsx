import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modeSelector } from "./atoms";
import Router from "./Router";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [mode, setMode] = useRecoilState(modeSelector);
  const desktop = useMediaQuery({ query: "(min-width: 1240px)" });
  const tablet = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    // React는 resize 이벤트를 기본적으로 감지하지 않기에, resize를 감지하는 hook 설정
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    // user의 디바이스 종류 설정 후 recoil에 저장
    if (desktop) {
      setMode("desktop");
    } else if (tablet) {
      setMode("tablet");
    } else setMode("mobile");
  }, [width]);

  return (
    <>
      <Router />;
    </>
  );
}

export default App;
