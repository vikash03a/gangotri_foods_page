// ─── Hero Section ───
import { useState, useEffect } from "react";
import { TURMERIC_IMG, CHILLI_IMG, CORIANDER_IMG } from "../assets/images";
import siteConfig from "../data/siteConfig";
import { PRODUCTS } from "../data/products";

// Map product key → image
const IMAGE_MAP = {
  turmeric:  TURMERIC_IMG,
  chilli:    CHILLI_IMG,
  coriander: CORIANDER_IMG,
};

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 120); }, []);

  const fade = (delay) => ({
    opacity:    loaded ? 1 : 0,
    transform:  loaded ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  const { hero } = siteConfig;

  return (
    <section
      id="home"
      style={{
        minHeight:  "100vh",
        background: "linear-gradient(150deg,#1A0500 0%,#3D1500 25%,#7B3A10 55%,#C06818 80%,#D4820A 100%)",
        display:    "flex",
        alignItems: "center",
        position:   "relative",
        overflow:   "hidden",
        padding:    "7rem 5% 4rem",
        width:      "100%",
        boxSizing:  "border-box",
      }}
    >
      {/* Decorative blurs */}
      <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", background:"#E8A020", filter:"blur(90px)", opacity:0.22, top:-150, right:"5%", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:350, height:350, borderRadius:"50%", background:"#C0392B", filter:"blur(75px)", opacity:0.18, bottom:50, right:"30%", pointerEvents:"none" }} />
      {/* Dot grid */}
      <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(#E8A020 1px,transparent 1px)", backgroundSize:"44px 44px", pointerEvents:"none" }} />

      {/* ── Left Content ── */}
      <div style={{ maxWidth:640, position:"relative", zIndex:2, flex:1 }}>

        {/* Badge */}
        <div style={{ ...fade(0), display:"inline-flex", alignItems:"center", gap:"0.5rem", background:"rgba(232,160,32,0.12)", border:"1px solid rgba(232,160,32,0.3)", color:"#F5C842", fontSize:"0.73rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", padding:"0.4rem 1rem", borderRadius:100, marginBottom:"1.4rem" }}>
          🌿 {hero.badge}
        </div>

        {/* Main heading */}
        <h1 style={{ ...fade(140), fontFamily:"'Playfair Display',serif", fontSize:"clamp(2.6rem,5.5vw,4.6rem)", fontWeight:900, lineHeight:1.06, color:"#FDFAF4", marginBottom:"0.35rem" }}>
          From Our{" "}
          <em style={{ color:"#F5C842", fontStyle:"italic" }}>Farms</em>
          <br />to Your Kitchen
        </h1>

        {/* Hindi subheading */}
        <p style={{ ...fade(260), fontFamily:"'Kalam',cursive", fontSize:"clamp(1.2rem,2.2vw,1.75rem)", color:"rgba(255,255,255,0.42)", marginBottom:"1.4rem" }}>
          {hero.subheading}
        </p>

        {/* Description */}
        <p style={{ ...fade(360), fontSize:"1.02rem", lineHeight:1.85, color:"rgba(255,255,255,0.7)", maxWidth:510, marginBottom:"2.2rem" }}>
          {hero.description}
        </p>

        {/* CTA Buttons */}
        <div style={{ ...fade(480), display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"2.8rem" }}>
          <a
            href="#products"
            style={{ background:"#E8A020", color:"#3D1F00", padding:"0.88rem 2rem", borderRadius:100, fontSize:"0.93rem", fontWeight:700, display:"inline-flex", alignItems:"center", gap:6, transition:"all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background="#F5C842"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="#E8A020"; e.currentTarget.style.transform="none"; }}
          >🛒 Explore Products</a>
          <a
            href="#why"
            style={{ background:"transparent", color:"white", padding:"0.88rem 2rem", borderRadius:100, fontSize:"0.93rem", fontWeight:500, border:"1.5px solid rgba(255,255,255,0.28)", display:"inline-flex", alignItems:"center", gap:6, transition:"background 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >✨ Why Gangotri Foods</a>
        </div>

        {/* Stats */}
        <div style={{ ...fade(580), display:"flex", gap:"2rem", paddingTop:"1.8rem", borderTop:"1px solid rgba(255,255,255,0.1)", flexWrap:"wrap" }}>
          {hero.stats.map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.7rem", fontWeight:900, color:"#F5C842" }}>{value}</div>
              <div style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.42)", textTransform:"uppercase", letterSpacing:"0.1em", marginTop:2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: Floating Product Cards ── */}
      <div
        className="hero-products"
        style={{ ...fade(400), position:"absolute", right:"2%", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:"1rem", zIndex:2 }}
      >
        {PRODUCTS.map(({ key, name, hindi, heroColor, sizes }) => (
          <div
            key={key}
            style={{ background:"rgba(255,255,255,0.07)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.13)", borderRadius:16, padding:"0.75rem 1.1rem", display:"flex", alignItems:"center", gap:10, cursor:"pointer", transition:"all 0.3s", minWidth:215 }}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.14)"; e.currentTarget.style.transform="translateX(-5px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.07)"; e.currentTarget.style.transform="none"; }}
          >
            <img src={IMAGE_MAP[key]} alt={name} style={{ width:56, height:78, objectFit:"cover", borderRadius:9, flexShrink:0 }} />
            <div>
              <div style={{ fontWeight:700, color:"white", fontSize:"0.85rem" }}>{name}</div>
              <div style={{ fontFamily:"'Kalam',cursive", fontSize:"0.78rem", color:heroColor, marginTop:2 }}>{hindi}</div>
              <div style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.38)", marginTop:2 }}>
                {sizes[0]} – {sizes[sizes.length - 1]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:5, color:"rgba(255,255,255,0.32)", fontSize:"0.68rem", letterSpacing:"0.15em", textTransform:"uppercase" }}>
        <span>Scroll</span>
        <div style={{ width:1, height:36, background:"linear-gradient(to bottom,rgba(255,255,255,0.32),transparent)" }} />
      </div>

      <style>{`
        .hero-products { display: flex; }
        @media(max-width:1000px) { .hero-products { display: none !important; } }
      `}</style>
    </section>
  );
}
