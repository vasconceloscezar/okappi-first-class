import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

export default function App() {
  return (
    <>
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
