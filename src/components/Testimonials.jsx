// ─── Testimonials Section ───
// Edit reviews in src/data/siteConfig.js → testimonials array

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import siteConfig from "../data/siteConfig";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      style={{ padding:"6rem 5%", background:"#F5EBE0", width:"100%", boxSizing:"border-box" }}
    >
      <FadeIn>
        <SectionHeader
          tag="Customer Love"
          title={<>What Indian Families <em style={{ fontStyle:"italic", color:"#C4800A" }}>Are Saying</em></>}
          desc="Real families who made the switch to pure spices."
          center
        />
      </FadeIn>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:"1.3rem" }}>
        {siteConfig.testimonials.map(({ text, name, loc }, i) => (
          <FadeIn key={name} delay={i * 65}>
            <div
              style={{ background:"white", borderRadius:22, padding:"1.7rem", border:"1px solid rgba(93,58,26,0.06)", transition:"all 0.3s", height:"100%", display:"flex", flexDirection:"column" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 15px 40px rgba(93,58,26,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
            >
              {/* Stars */}
              <div style={{ color:"#E8A020", fontSize:"1rem", marginBottom:"0.8rem" }}>★★★★★</div>

              {/* Review text */}
              <p style={{ fontSize:"0.88rem", lineHeight:1.78, color:"#4A2C0A", fontStyle:"italic", marginBottom:"1.3rem", flex:1, paddingLeft:"1.1rem", position:"relative" }}>
                <span style={{ position:"absolute", left:0, top:"-0.3rem", fontFamily:"'Playfair Display',serif", fontSize:"2.2rem", color:"#FDF3DC", lineHeight:1 }}>"</span>
                {text}
              </p>

              {/* Author */}
              <div style={{ display:"flex", alignItems:"center", gap:10, borderTop:"1px solid rgba(93,58,26,0.07)", paddingTop:"1rem" }}>
                <div style={{ width:40, height:40, borderRadius:"50%", background:"#FDF3DC", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>👤</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:"0.86rem", color:"#1A0A00" }}>{name}</div>
                  <div style={{ fontSize:"0.73rem", color:"#8B7355" }}>📍 {loc}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
