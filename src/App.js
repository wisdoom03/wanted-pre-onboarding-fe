import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/user/login";
import TodoPage from "./components/todo/todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* 권한분기 필요 */}
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
