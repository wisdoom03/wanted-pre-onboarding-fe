import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/home";
import TodoPage from "./pages/todo";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/GlobalStyles";
import Layout from "./components/commons/layout";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<div>404</div>} />
          <Route element={<PrivateRoutes />}>
            <Route path="/todo" element={<TodoPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
