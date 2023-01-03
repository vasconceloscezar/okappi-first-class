import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// function NoMatch() {
//   return (
//     <Container>
//       <MainHeading inverse>Página não encontrada</MainHeading>
//     </Container>
//   );
// }
