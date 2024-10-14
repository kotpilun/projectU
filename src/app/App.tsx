import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPageAsync } from "../pages/AboutPage";
import { MainPageAsync } from "../pages/MainPage";
import { classNames } from "../shared/lib/classNames/classNames";

function App() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme!])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
