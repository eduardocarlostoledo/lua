import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";
import HeroSection from "./components/HeroSection";
import SecondaryHeroSection from "./components/SecondaryHeroSection";
import SecondaryHeroSectionAlt from "./components/SecondaryHeroSectionAlt";
import NewDrops from "./components/NewDrops";
import HowToBuy from "./components/HowToBuy";
import VipGroup from "./components/VipGroup";
import StoreLocation from "./components/StoreLocation";
import AboutUsPage from "./components/AboutUsPage";
import "../src/styles/App.css";

const HomePage = () => (
  <>
    <HeroSection />
    <SecondaryHeroSection />
    <NewDrops />
    <SecondaryHeroSectionAlt />
    <HowToBuy />
    <VipGroup />
    <StoreLocation />
  </>
);

const NotFound = () => (
  <section style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <h1>404</h1>
    <p>Página no encontrada.</p>
  </section>
);

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<AboutUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </AppProvider>
  );
};

export default App;
