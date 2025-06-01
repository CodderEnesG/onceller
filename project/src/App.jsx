import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Hidrolik from "./pages/Products/Hidrolik";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact_us" element={<Contact />} />
      <Route path="/products/hidrolik" element={<Hidrolik />} />
      <Route path="/products/hidrolik/:productSlug" element={<Hidrolik />} />
    </Routes>
  );
}

export default App;
