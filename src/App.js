import React from "react";

// Custom Components
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

// App Component
function App() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }} className="App">
      <Header />
      <Carousel />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
