import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

// function NoMatch() {
//   return (
//     <Container>
//       <MainHeading inverse>Página não encontrada</MainHeading>
//     </Container>
//   );
// }
