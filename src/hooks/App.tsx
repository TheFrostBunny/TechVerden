import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Guides from "@/pages/Guides";
import Popular from "@/pages/Popular";
import Newest from "@/pages/Newest";
import Categories from "@/pages/Categories";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Search from "@/pages/Search";
import GuideDetail from "@/pages/GuideDetail";
import CategoryDetail from "@/pages/CategoryDetail";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/guides"} component={Guides} />
      <Route path={"/popular"} component={Popular} />
      <Route path={"/newest"} component={Newest} />
      <Route path={"/categories"} component={Categories} />
      <Route path={"/category/:category"} component={CategoryDetail} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/search"} component={Search} />
      <Route path={"/guide/:slug"} component={GuideDetail} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <FavoritesProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </FavoritesProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
