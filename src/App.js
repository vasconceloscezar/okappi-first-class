import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import { Home } from "./pages";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

function NoMatch() {
  return <div>Página não existe</div>;
}
