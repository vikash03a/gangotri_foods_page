// ─── Farmers / India Section ───
// Edit content in src/data/siteConfig.js → farmers array

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import siteConfig from "../data/siteConfig";

export default function Farmers() {
  return (
    <section
      style={{ padding:"6rem 5%", background:"linear-gradient(135deg,#1A4A1A,#2E7D32,#1B5E20)", textAlign:"center", position:"relative", overflow:"hidden", width:"100%", boxSizing:"border-box" }}
    >
      {/* Dot grid overlay */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize:"40px 40px", pointerEvents:"none" }} />

      <FadeIn>
        <div style={{ position:"relative", zIndex:1 }}>
          <SectionHeader
            tag="Our Roots"
            title={<>Sowing Seeds of <em style={{ color:"#76FF03", fontStyle:"italic" }}>Independence</em></>}
            desc="Every jar of Gangotri Foods spice is a small yet powerful step towards a self-reliant India — where quality, health, and homegrown pride flourish."
            center
            light
          />
        </div>
      </FadeIn>

      {/* Cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:"1.1rem", position:"relative", zIndex:1 }}>
        {siteConfig.farmers.map(({ icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 75}>
            <div
              style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, padding:"1.9rem 1.4rem", height:"100%", transition:"all 0.4s" }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.13)"; e.currentTarget.style.transform="translateY(-5px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.07)"; e.currentTarget.style.transform="none"; }}
            >
              <div style={{ fontSize:"2.3rem", marginBottom:"0.9rem" }}>{icon}</div>
              <h3  style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.05rem", fontWeight:700, color:"white", marginBottom:5 }}>{title}</h3>
              <p   style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.58)", lineHeight:1.65 }}>{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Tricolour quote */}
      <FadeIn delay={200}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginTop:"3rem", position:"relative", zIndex:1, flexWrap:"wrap" }}>
          <TriColour />
          <p style={{ fontFamily:"'Kalam',cursive", fontSize:"1.25rem", color:"white" }}>
            "Jai Kisan · Jai Kisaan · Jai Bharat 🇮🇳"
          </p>
          <TriColour />
        </div>
      </FadeIn>
    </section>
  );
}

function TriColour() {
  return (
    <div style={{ display:"flex", height:5, width:70, borderRadius:3, overflow:"hidden" }}>
      <span style={{ flex:1, background:"#FF9933" }} />
      <span style={{ flex:1, background:"#FFFFFF" }} />
      <span style={{ flex:1, background:"#138808" }} />
    </div>
  );
}
