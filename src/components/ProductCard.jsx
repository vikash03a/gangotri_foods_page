// ─── ProductCard Component ───
// Renders a single product card. Used inside the Products section.
// Props come from src/data/products.js

import { useState } from "react";
import siteConfig from "../data/siteConfig";

export default function ProductCard({ product, image }) {
  const { name, hindi, tagline, badge, badgeBg, badgeColor, accentColor, description, features, sizes, whatsappText } = product;
  const [selectedSize, setSelectedSize] = useState(sizes[sizes.length - 1]); // default to largest
  const { whatsapp } = siteConfig.contact;

  const waUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`${whatsappText} (${selectedSize}) from Gangotri Foods`)}`;

  return (
    <div
      style={{ background:"white", borderRadius:28, overflow:"hidden", border:"1px solid rgba(93,58,26,0.06)", height:"100%", display:"flex", flexDirection:"column", transition:"all 0.4s" }}
      onMouseEnter={e => { e.currentTarget.style.transform="translateY(-8px)"; e.currentTarget.style.boxShadow="0 22px 55px rgba(93,58,26,0.13)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
    >
      {/* ── Product Image ── */}
      <div style={{ height:290, position:"relative", overflow:"hidden" }}>
        <img src={image} alt={name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }} />
        <div style={{ position:"absolute", top:"0.8rem", right:"0.8rem", background:badgeBg, color:badgeColor, fontSize:"0.66rem", fontWeight:700, padding:"0.28rem 0.7rem", borderRadius:100, letterSpacing:"0.08em" }}>
          {badge}
        </div>
      </div>

      {/* ── Card Body ── */}
      <div style={{ padding:"1.7rem", flex:1, display:"flex", flexDirection:"column" }}>

        {/* Purity badge */}
        <div style={{ display:"inline-flex", alignItems:"center", gap:5, background:"#FDF3DC", color:accentColor, fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", padding:"0.28rem 0.75rem", borderRadius:100, marginBottom:"0.75rem", alignSelf:"flex-start" }}>
          ✓ 100% Pure · No Added Colour
        </div>

        {/* Name & Hindi */}
        <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", fontWeight:700, color:"#1A0A00", marginBottom:2 }}>{name}</h3>
        <p  style={{ fontFamily:"'Kalam',cursive", fontSize:"0.95rem", color:"#8B7355", marginBottom:3 }}>{hindi}</p>
        <p  style={{ fontSize:"0.75rem", fontStyle:"italic", color:accentColor, marginBottom:"0.85rem", fontWeight:500 }}>{tagline}</p>

        {/* Description */}
        <p style={{ fontSize:"0.87rem", lineHeight:1.75, color:"#8B7355", marginBottom:"1.2rem", flex:1 }}>{description}</p>

        {/* Feature tags */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:"1.1rem" }}>
          {features.map(f => (
            <span key={f} style={{ background:"#F5EBE0", color:"#5D3A1A", fontSize:"0.7rem", padding:"0.27rem 0.6rem", borderRadius:100, fontWeight:500 }}>{f}</span>
          ))}
        </div>

        {/* Size selector */}
        <div style={{ marginBottom:"1.1rem" }}>
          <div style={{ fontSize:"0.68rem", fontWeight:600, color:"#8B7355", marginBottom:5, textTransform:"uppercase", letterSpacing:"0.08em" }}>Select Size</div>
          <div style={{ display:"flex", gap:5 }}>
            {sizes.map(s => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                style={{ border:`1.5px solid ${selectedSize === s ? accentColor : "rgba(93,58,26,0.14)"}`, borderRadius:8, padding:"0.3rem 0.7rem", fontSize:"0.76rem", background: selectedSize === s ? "#FDF3DC" : "transparent", color: selectedSize === s ? accentColor : "#8B7355", cursor:"pointer", transition:"all 0.2s", fontWeight: selectedSize === s ? 700 : 400 }}
              >{s}</button>
            ))}
          </div>
        </div>

        {/* WhatsApp order button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          style={{ background:"#25D366", color:"white", padding:"0.78rem 1.3rem", borderRadius:100, fontSize:"0.87rem", fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", gap:6, transition:"all 0.25s" }}
          onMouseEnter={e => { e.currentTarget.style.background="#128C7E"; e.currentTarget.style.transform="translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background="#25D366"; e.currentTarget.style.transform="none"; }}
        >
          💬 Order on WhatsApp — {selectedSize}
        </a>
      </div>
    </div>
  );
}
