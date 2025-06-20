import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Hidrolik from "./pages/Products/Hidrolik";
import Pnomatik from "./pages/Products/Pnomatik";
import Zincir from "./pages/Products/Zincir/Zincir";
import ZincirCategoryGrid from "./pages/Products/Zincir/ZincirCategoryGrid";
import ZincirMain from "./pages/Products/Zincir";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact_us" element={<Contact />} />
      <Route path="/products/hidrolik/:productSlug" element={<Hidrolik />} />
      <Route path="/products/pnomatik/:productSlug" element={<Pnomatik />} />
      <Route path="/products/hidrolik" element={<Hidrolik />} />
      <Route path="/products/pnomatik" element={<Pnomatik />} />

      <Route path="/products/zincir" element={<ZincirMain />}>
        <Route index element={<ZincirCategoryGrid />} />
        <Route path="kategoriler" element={<ZincirCategoryGrid />} />
              <Route path=":slug" element={<Zincir />} />

      </Route>
    </Routes>
  );
}

export default App;
