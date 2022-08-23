import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/user/Login";
import TodoPage from "./components/todo/Todo";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
