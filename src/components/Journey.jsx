// ─── Farm-to-Kitchen Journey Section ───
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import siteConfig from "../data/siteConfig";

export default function Journey() {
  const steps = siteConfig.journey;

  return (
    <section
      id="journey"
      style={{ padding:"6rem 5%", background:"#FDFAF4", width:"100%", boxSizing:"border-box" }}
    >
      <FadeIn>
        <SectionHeader
          tag="Farm-to-Kitchen"
          title={<>The Journey of <em style={{ fontStyle:"italic", color:"#C4800A" }}>Every Spice</em></>}
          desc="We control every single step — so you can trust every single bite."
          center
        />
      </FadeIn>

      <div className="journey-wrap" style={{ display:"flex", alignItems:"flex-start", position:"relative" }}>
        {steps.map(({ icon, step, title, desc }, i) => (
          <>
            <FadeIn key={title} delay={i * 80} style={{ flex:1 }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", position:"relative", zIndex:1 }}>

                {/* Icon circle */}
                <div
                  style={{ width:74, height:74, borderRadius:"50%", background:"white", border:"3px solid #FDF3DC", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.8rem", marginBottom:"1rem", boxShadow:"0 5px 20px rgba(232,160,32,0.14)", transition:"all 0.4s", cursor:"default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="#E8A020"; e.currentTarget.style.transform="scale(1.1)"; e.currentTarget.style.boxShadow="0 8px 25px rgba(232,160,32,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="#FDF3DC"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 5px 20px rgba(232,160,32,0.14)"; }}
                >
                  {icon}
                </div>

                <div style={{ fontSize:"0.65rem", fontWeight:700, color:"#E8A020", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:3 }}>Step {step}</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"0.97rem", fontWeight:700, color:"#1A0A00", marginBottom:4 }}>{title}</div>
                <p   style={{ fontSize:"0.76rem", color:"#8B7355", lineHeight:1.6, maxWidth:108, margin:"0 auto" }}>{desc}</p>
              </div>
            </FadeIn>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div key={`arrow-${i}`} className="journey-arrow" style={{ fontSize:"1.2rem", color:"#E8A020", marginTop:22, flexShrink:0, padding:"0 3px" }}>→</div>
            )}
          </>
        ))}
      </div>

      <style>{`
        @media(max-width:800px) {
          .journey-wrap        { flex-direction: column; align-items: center; gap: 2rem; }
          .journey-arrow       { transform: rotate(90deg); }
        }
      `}</style>
    </section>
  );
}
