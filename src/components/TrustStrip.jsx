// ─── TrustStrip Component ───
// Animated scrolling trust badges below the hero section.

const ITEMS = [
  "100% Pure & Natural",
  "No Artificial Colour",
  "No Chemicals Added",
  "Farm-to-Kitchen",
  "FSSAI Certified",
  "Made with Love in India 🇮🇳",
  "Zero Adulteration",
  "Muzaffarpur, Bihar",
];

export default function TrustStrip() {
  // Double the items for seamless infinite scroll
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ background:"#5D3A1A", padding:"0.9rem 0", overflow:"hidden" }}>
      <div style={{
        display:   "flex",
        gap:       "3rem",
        animation: "marquee 22s linear infinite",
        whiteSpace:"nowrap",
        width:     "max-content",
      }}>
        {doubled.map((text, i) => (
          <span key={i} style={{ display:"flex", alignItems:"center", gap:"0.6rem", color:"rgba(255,255,255,0.82)", fontSize:"0.8rem", fontWeight:500 }}>
            <span style={{ color:"#E8A020", fontSize:"0.9rem" }}>✦</span>
            {text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
