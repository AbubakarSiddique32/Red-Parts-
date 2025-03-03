import "./App.css";
import Navbar from "./components/Header&Navbar/Navbar";
import Header from "./components/Header&Navbar/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Attention from "./components/Attention/Attention";
import BestSeller from "./components/BestSeller/BestSeller";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import LatestNews from "./components/LatestNews/LatestNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/About/Contact";
import TrackOrder from "./components/About/TrackOrder";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <FeaturedProducts />
              <Attention />
              <BestSeller />
              <BestSeller />
              <BestSeller />
              <NewArrivals />
              <LatestNews />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="/track-order"
          element={
            <>
              <TrackOrder />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
