import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThreadsPage } from "./pages/Threads";
import { NewThreadPage } from "./pages/NewThread";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<ThreadsPage />} />
        <Route path={`thread/new`} element={<NewThreadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
