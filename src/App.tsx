import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Guides from "@/pages/Guides";
import Popular from "@/pages/Popular";
import Newest from "@/pages/Newest";
import Categories from "@/pages/Categories";
import Contact from "@/pages/Contact";
import Search from "@/pages/Search";
import GuideDetail from "@/pages/GuideDetail";
import CategoryDetail from "@/pages/CategoryDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/newest" element={<Newest />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:category" element={<CategoryDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />
      <Route path="/guide/:slug" element={<GuideDetail />} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" switchable>
          <FavoritesProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
