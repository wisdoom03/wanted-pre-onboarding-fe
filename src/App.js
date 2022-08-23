import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/user/Login";
import TodoPage from "./components/todo/Todo";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/GlobalStyles";
import { useState, createContext } from "react";

export const GlobalContext = createContext({});

function App() {
  const [accessToken, setAccessToken] = useState("");

  const value = {
    accessToken,
    setAccessToken,
  };

  return (
    <GlobalContext.Provider value={value}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* 권한분기 필요 */}
          <Route path="/todo" element={<TodoPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
