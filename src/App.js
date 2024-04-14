import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThreadsPage } from "./pages/Threads";
import { NewThreadPage } from "./pages/NewThread";
import { ThreadPage } from "./pages/Thread";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<ThreadsPage />} />
        <Route path={`thread/new`} element={<NewThreadPage />} />
        <Route path={`/thread/:thread_id`} element={<ThreadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
