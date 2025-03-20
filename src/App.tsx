import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList/PokemonList";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  </Router>
  )
}

export default App
