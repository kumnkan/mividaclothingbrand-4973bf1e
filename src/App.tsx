import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import TShirts from "./pages/TShirts";
import TShirtDetail from "./pages/TShirtDetail";
import Hoodies from "./pages/Hoodies";
import HoodieDetail from "./pages/HoodieDetail";
import ProductDetail from "./pages/ProductDetail";
import TrackOrder from "./pages/TrackOrder";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <CartProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tshirts" element={<TShirts />} />
          <Route path="/tshirt/:id" element={<TShirtDetail />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/hoodie/:id" element={<HoodieDetail />} />
          <Route path="/socks" element={<CategoryPage />} />
          <Route path="/new-arrivals" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </TooltipProvider>
);

export default App;
