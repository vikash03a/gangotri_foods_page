// ─── Comparison Section ───
// Edit the bad/good arrays below to change comparison points.

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const BAD = [
  ["Artificial Colour",     "Lead chromate in turmeric, synthetic dyes in chilli — slow poison for your family"],
  ["Chemical Mixing",       "Preservatives & flavour enhancers added purely for shelf life and appearance"],
  ["Adulteration",          "Brick powder, sawdust, starch mixed in to increase weight and cut costs"],
  ["Unknown Sourcing",      "Multi-layer supply chain with no traceability or farm verification"],
  ["Industrial Processing", "High-heat processing destroys essential oils and natural flavour"],
  ["Weak / Fake Aroma",     "Synthetic fragrance chemicals added to mimic natural spice aroma"],
];

const GOOD = [
  ["Natural Colour",        "Pure gold from real turmeric roots, vibrant red from genuine sun-dried chilies"],
  ["Pure Ingredients",      "Not a single additive, preservative, or enhancer — ever. Period."],
  ["Zero Adulteration",     "Every batch 100% pure — what's on the pack is exactly what's inside"],
  ["Farm Sourced",          "Grown on our own family fields in Muzaffarpur — complete chain of custody"],
  ["Stone-Ground In-House", "Slow grinding retains all essential oils, natural potency, and full flavour"],
  ["Rich Natural Aroma",    "The authentic, intoxicating fragrance of truly fresh, farm-grown spices"],
];

export default function Comparison() {
  return (
    <section
      style={{ padding:"6rem 5%", background:"linear-gradient(180deg,#FDFAF4,#F5EBE0)", width:"100%", boxSizing:"border-box" }}
    >
      <FadeIn>
        <SectionHeader
          tag="The Truth"
          title={<>Market Spices <em style={{ fontStyle:"italic", color:"#C4800A" }}>vs</em> Gangotri Foods</>}
          desc="See the real difference — and make the right choice for your family."
          center
        />
      </FadeIn>

      <FadeIn delay={100}>
        <div
          className="comparison-grid"
          style={{ display:"grid", gridTemplateColumns:"1fr 56px 1fr", borderRadius:24, overflow:"hidden", boxShadow:"0 20px 60px rgba(93,58,26,0.1)" }}
        >
          {/* Bad column */}
          <div style={{ background:"#FDF2F2", padding:"2.3rem" }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.15rem", fontWeight:700, color:"#922B21", marginBottom:"1.8rem", paddingBottom:"1rem", borderBottom:"1px solid rgba(146,43,33,0.14)" }}>
              ❌ Ordinary Market Spices
            </div>
            {BAD.map(([title, desc]) => (
              <div key={title} style={{ display:"flex", gap:10, marginBottom:"1rem", alignItems:"flex-start" }}>
                <div style={{ width:20, height:20, borderRadius:"50%", background:"#FECACA", color:"#B91C1C", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.65rem", flexShrink:0, marginTop:2 }}>✗</div>
                <div style={{ fontSize:"0.85rem", color:"#6B2020", lineHeight:1.55 }}>
                  <strong>{title}: </strong>{desc}
                </div>
              </div>
            ))}
          </div>

          {/* VS divider */}
          <div style={{ background:"white", display:"flex", alignItems:"center", justifyContent:"center", writingMode:"vertical-rl", fontFamily:"'Playfair Display',serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#8B7355" }}>
            VS
          </div>

          {/* Good column */}
          <div style={{ background:"linear-gradient(135deg,#3D1F00,#8B4513)", padding:"2.3rem" }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.15rem", fontWeight:700, color:"#F5C842", marginBottom:"1.8rem", paddingBottom:"1rem", borderBottom:"1px solid rgba(255,255,255,0.12)" }}>
              ✅ Gangotri Foods
            </div>
            {GOOD.map(([title, desc]) => (
              <div key={title} style={{ display:"flex", gap:10, marginBottom:"1rem", alignItems:"flex-start" }}>
                <div style={{ width:20, height:20, borderRadius:"50%", background:"rgba(232,160,32,0.2)", color:"#F5C842", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.65rem", flexShrink:0, marginTop:2 }}>✓</div>
                <div style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.82)", lineHeight:1.55 }}>
                  <strong style={{ color:"rgba(255,255,255,0.95)" }}>{title}: </strong>{desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <style>{`
        @media(max-width:700px) {
          .comparison-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
