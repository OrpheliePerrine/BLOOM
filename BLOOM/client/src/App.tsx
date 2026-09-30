import { Route, Router, Switch } from "wouter";
import { Toaster } from "sonner";
import { BagProvider } from "./components/BagContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import Market from "./pages/Market";
import ProductDetail from "./pages/ProductDetail";
import Uplift from "./pages/Uplift";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <BagProvider>
        <ScrollToTop />
        <Toaster position="bottom-center" />
        <div className="alche-app">
          <Header />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/stories" component={Stories} />
            <Route path="/stories/:id" component={StoryDetail} />
            <Route path="/market" component={Market} />
            <Route path="/market/:id" component={ProductDetail} />
            <Route path="/uplift" component={Uplift} />
            <Route path="/join" component={Join} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BagProvider>
    </Router>
  );
}