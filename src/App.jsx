// ─── App.jsx ───
// This is the root component. It just assembles all sections in order.
// To add/remove/reorder sections, edit this file only.

import "../src/styles/index.css";

import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import TrustStrip       from "./components/TrustStrip";
import About            from "./components/About";
import WhyUs            from "./components/WhyUs";
import Products         from "./components/Products";
import Comparison       from "./components/Comparison";
import Journey          from "./components/Journey";
import Testimonials     from "./components/Testimonials";
import Farmers          from "./components/Farmers";
import Contact          from "./components/Contact";
import Footer           from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div style={{ width:"100%", maxWidth:"100%", overflowX:"hidden" }}>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <WhyUs />
      <Products />
      <Comparison />
      <Journey />
      <Testimonials />
      <Farmers />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
