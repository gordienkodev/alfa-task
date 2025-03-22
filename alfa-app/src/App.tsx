import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BreedsPage from "./pages/BreedsPage";
import NotFoundPage from "./pages/NotFoundPage";
import BreedDetail from "./pages/BreedDetail/BreedDetail";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<BreedsPage />} />
        <Route path="/products/:breedName" element={<BreedDetail />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
