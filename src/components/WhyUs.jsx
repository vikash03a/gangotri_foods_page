// ─── Why Choose Us Section ───
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import siteConfig from "../data/siteConfig";

export default function WhyUs() {
  return (
    <section
      id="why"
      style={{ padding:"6rem 5%", background:"#5D3A1A", width:"100%", boxSizing:"border-box" }}
    >
      <FadeIn>
        <SectionHeader
          tag="Why Gangotri Foods"
          title={<>Your Family Deserves the <em style={{ color:"#F5C842", fontStyle:"italic" }}>Best</em></>}
          desc="We don't just promise purity — we guarantee it at every step of our process."
          center
          light
        />
      </FadeIn>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:"1.1rem" }}>
        {siteConfig.whyUs.map(({ icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 55}>
            <div
              style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:20, padding:"1.7rem 1.3rem", cursor:"default", height:"100%", transition:"all 0.35s" }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.11)"; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.borderColor="rgba(232,160,32,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.transform="none"; e.currentTarget.style.borderColor="rgba(255,255,255,0.09)"; }}
            >
              <div style={{ width:58, height:58, borderRadius:16, background:"rgba(232,160,32,0.13)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.55rem", margin:"0 auto 1rem" }}>
                {icon}
              </div>
              <h3 style={{ fontSize:"0.94rem", fontWeight:700, color:"white", marginBottom:5, textAlign:"center" }}>{title}</h3>
              <p  style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.52)", lineHeight:1.65, textAlign:"center" }}>{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
