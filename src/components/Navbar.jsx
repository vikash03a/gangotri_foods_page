// ─── Navbar Component ───
import { useState, useEffect } from "react";
import siteConfig from "../data/siteConfig";

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Products", href: "#products" },
  { label: "Why Us",   href: "#why"      },
  { label: "Journey",  href: "#journey"  },
  { label: "Reviews",  href: "#reviews"  },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = scrolled ? "#4A2C0A" : "rgba(255,255,255,0.9)";

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav style={{
        position:       "fixed",
        top: 0, left: 0, right: 0,
        zIndex:         1000,
        padding:        scrolled ? "0.65rem 5%" : "1rem 5%",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        background:     scrolled ? "rgba(253,250,244,0.97)" : "rgba(20,8,0,0.72)",
        backdropFilter: "blur(14px)",
        borderBottom:   scrolled
          ? "1px solid rgba(93,58,26,0.12)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow:      scrolled ? "0 2px 24px rgba(93,58,26,0.12)" : "none",
        transition:     "all 0.4s ease",
        width:          "100%",
        boxSizing:      "border-box",
      }}>

        {/* Logo */}
        <a href="#home" style={{ display:"flex", alignItems:"center", gap:"0.6rem", textDecoration:"none", flexShrink:0 }}>
          <div style={{
            width:36, height:36, borderRadius:"50%",
            background:"#5D3A1A",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:"1.1rem",
          }}>⛰️</div>
          <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.25rem", fontWeight:900 }}>
            <span style={{ color:"#E8A020" }}>Gangotri</span>
            <span style={{ color: scrolled ? "#5D3A1A" : "#FDFAF4" }}> Foods</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display:"flex", alignItems:"center", gap:"2rem" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ color: linkColor, fontSize:"0.87rem", fontWeight:500, transition:"color 0.25s" }}
              onMouseEnter={e => e.target.style.color = "#E8A020"}
              onMouseLeave={e => e.target.style.color = linkColor}
            >{label}</a>
          ))}
          <a
            href="#contact"
            style={{
              background:"#E8A020", color:"#3D1F00",
              padding:"0.48rem 1.25rem", borderRadius:100,
              fontSize:"0.84rem", fontWeight:700, transition:"background 0.25s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#C4800A"}
            onMouseLeave={e => e.currentTarget.style.background = "#E8A020"}
          >Order Now</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="hamburger"
          style={{ display:"none", background:"none", border:"none", cursor:"pointer", fontSize:"1.5rem", color:"white" }}
        >☰</button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div style={{
          position:"fixed", inset:0,
          background:"#FDFAF4", zIndex:1100,
          display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center", gap:"2.5rem",
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position:"absolute", top:"1.5rem", right:"5%", background:"none", border:"none", fontSize:"2rem", cursor:"pointer", color:"#5D3A1A" }}
          >✕</button>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily:"'Playfair Display',serif", fontSize:"2rem", color:"#1A0A00", fontWeight:700 }}
            >{label}</a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{ background:"#E8A020", color:"#3D1F00", padding:"0.8rem 2.5rem", borderRadius:100, fontWeight:700, fontSize:"1.1rem" }}
          >Order Now</a>
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .desktop-nav { display:none !important }
          .hamburger   { display:block !important }
        }
      `}</style>
    </>
  );
}
