// ─── About Section ───
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding:             "6rem 5%",
        background:          "#FFF9EF",
        display:             "grid",
        gridTemplateColumns: "1fr 1fr",
        gap:                 "4.5rem",
        alignItems:          "center",
        width:               "100%",
        boxSizing:           "border-box",
      }}
      className="about-grid"
    >
      {/* ── Left Visual Card ── */}
      <FadeIn>
        <div style={{ position:"relative" }}>
          <div style={{ background:"linear-gradient(135deg,#4A1E00,#8B4513)", borderRadius:28, padding:"2.5rem", position:"relative", overflow:"hidden" }}>

            {/* Big year */}
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"4.5rem", fontWeight:900, color:"rgba(232,160,32,0.1)", lineHeight:1, marginBottom:"0.2rem" }}>2024</div>

            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", fontWeight:700, color:"#F5C842", marginBottom:"0.75rem" }}>
              The Genesis of Purity
            </div>
            <p style={{ fontSize:"0.9rem", lineHeight:1.78, color:"rgba(255,255,255,0.76)" }}>
              Born from the sacred soil of Muzaffarpur, Bihar — where the scent of freshly ground spices
              is a symphony of health, tradition, and boundless love passed down through generations.
            </p>

            {/* Stats row */}
            <div style={{ display:"flex", gap:10, marginTop:"1.4rem", flexWrap:"wrap" }}>
              {[["Bihar","Origin"],["Farm","Own Fields"],["FSSAI","Certified"]].map(([n, l]) => (
                <div key={n} style={{ background:"rgba(232,160,32,0.1)", border:"1px solid rgba(232,160,32,0.2)", borderRadius:10, padding:"0.65rem 1rem", textAlign:"center" }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.25rem", fontWeight:700, color:"#F5C842" }}>{n}</div>
                  <div style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.42)", textTransform:"uppercase", letterSpacing:"0.1em" }}>{l}</div>
                </div>
              ))}
            </div>

            {/* Decorative circle */}
            <div style={{ position:"absolute", width:150, height:150, borderRadius:"50%", background:"rgba(232,160,32,0.07)", top:-40, right:-40, pointerEvents:"none" }} />
          </div>

          {/* Float badge */}
          <div style={{ position:"absolute", bottom:-18, right:-18, background:"#E8A020", borderRadius:16, padding:"0.9rem 1.3rem", boxShadow:"0 10px 30px rgba(232,160,32,0.35)" }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.7rem", fontWeight:900, color:"#3D1F00" }}>450g</div>
            <div style={{ fontSize:"0.68rem", color:"#5D3A1A", fontWeight:600 }}>Premium Pack</div>
          </div>
        </div>
      </FadeIn>

      {/* ── Right Text ── */}
      <FadeIn delay={150}>
        <div>
          <SectionHeader
            tag="Our Story"
            title={<>Where <em style={{ fontStyle:"italic", color:"#C4800A" }}>Tradition</em> Meets Pure Health</>}
          />
          <p style={{ fontSize:"0.93rem", lineHeight:1.85, color:"#8B7355", marginBottom:"1.1rem" }}>
            At Gangotri Foods, our story isn't just about spices — it's about a promise born from the
            fertile land of Muzaffarpur, Bihar, where our elders meticulously ground spices filling
            homes with aromas of health and happiness.
          </p>

          <blockquote style={{ background:"#F5EBE0", borderLeft:"3px solid #E8A020", borderRadius:"0 12px 12px 0", padding:"1.2rem 1.6rem", fontStyle:"italic", color:"#4A2C0A", fontSize:"0.94rem", lineHeight:1.72, margin:"1.4rem 0" }}>
            "We cultivate a legacy of wellness, straight from our own fertile farms. Every pinch of
            Gangotri Foods carries the soul of our land and the integrity of our commitment."
          </blockquote>

          <p style={{ fontSize:"0.92rem", lineHeight:1.8, color:"#8B7355", marginBottom:"1.8rem" }}>
            The market is flooded with products that prioritise profit over purity. We stand apart
            with our direct{" "}
            <strong style={{ color:"#5D3A1A" }}>Farm-to-Kitchen</strong>{" "}
            revolution — controlling every step from seed to your plate.
          </p>

          {/* Values grid */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {[
              ["🌾","Estate Grown",        "Own farms in Muzaffarpur"],
              ["🏭","In-House Processing", "Retains natural oils & potency"],
              ["🛡️","Quality Verified",    "Every batch personally checked"],
              ["❤️","Made with Love",      "Family values in every packet"],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"0.85rem", background:"white", borderRadius:12, border:"1px solid rgba(93,58,26,0.07)" }}>
                <div style={{ width:32, height:32, borderRadius:8, background:"#FDF3DC", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0 }}>{icon}</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:"0.83rem", color:"#1A0A00", marginBottom:2 }}>{title}</div>
                  <div style={{ fontSize:"0.75rem", color:"#8B7355", lineHeight:1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <style>{`
        @media(max-width:900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
