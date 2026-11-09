import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Watchlist from "./pages/Watchlist";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
