import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense, useState } from "react";
import { Modal } from "@/shared/ui/Modal/ui/Modal";

function App() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme!])}>
      <Suspense fallback="loading">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>Show Modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          quidem, ratione culpa sunt iusto consequatur consequuntur labore
          blanditiis omnis rerum veniam minus ullam odio facere maiores
          necessitatibus, repellendus, expedita nam.
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
