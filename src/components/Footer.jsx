// ─── Footer Component ───
import siteConfig from "../data/siteConfig";

export default function Footer() {
  const { brand, contact, social } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer style={{ background:"#0D0400", color:"white", padding:"4rem 5% 2rem", width:"100%", boxSizing:"border-box" }}>
      <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1.4fr", gap:"2.5rem", marginBottom:"2.5rem" }}>

        {/* Brand column */}
        <div>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", fontWeight:900, color:"#E8A020", marginBottom:3 }}>
            ⛰️ {brand.name}
          </div>
          <div style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.32)", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.9rem" }}>
            {brand.tagline}
          </div>
          <p style={{ fontSize:"0.84rem", lineHeight:1.75, color:"rgba(255,255,255,0.46)" }}>
            Born from the fertile soil of Muzaffarpur, Bihar. 100% pure farm-grown spices —
            free from adulteration, full of tradition and love.
          </p>
          <div style={{ background:"rgba(255,255,255,0.04)", borderRadius:8, padding:"0.65rem 1rem", marginTop:"1.1rem", fontSize:"0.7rem", color:"rgba(255,255,255,0.3)" }}>
            🛡️ FSSAI No: {brand.fssai} &nbsp;|&nbsp; Made with ❤️ in India 🇮🇳
          </div>
        </div>

        {/* Products column */}
        <div>
          <div style={{ fontSize:"0.72rem", fontWeight:700, color:"#E8A020", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"1.2rem" }}>Products</div>
          {["🟡 Turmeric Powder","🌶️ Red Chilli Powder","🌿 Coriander Powder","📦 Combo Packs"].map(t => (
            <a key={t} href="#products" style={{ display:"block", color:"rgba(255,255,255,0.42)", fontSize:"0.84rem", marginBottom:"0.65rem", textDecoration:"none", transition:"color 0.25s" }}
              onMouseEnter={e => e.target.style.color = "#E8A020"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.42)"}
            >{t}</a>
          ))}
        </div>

        {/* Quick links column */}
        <div>
          <div style={{ fontSize:"0.72rem", fontWeight:700, color:"#E8A020", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"1.2rem" }}>Quick Links</div>
          {[["About Us","#about"],["Why Choose Us","#why"],["Farm to Kitchen","#journey"],["Reviews","#reviews"],["Contact","#contact"]].map(([label, href]) => (
            <a key={label} href={href} style={{ display:"block", color:"rgba(255,255,255,0.42)", fontSize:"0.84rem", marginBottom:"0.65rem", textDecoration:"none", transition:"color 0.25s" }}
              onMouseEnter={e => e.target.style.color = "#E8A020"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.42)"}
            >{label}</a>
          ))}
        </div>

        {/* Contact column */}
        <div>
          <div style={{ fontSize:"0.72rem", fontWeight:700, color:"#E8A020", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"1.2rem" }}>Contact</div>
          {[
            ["📍", contact.address],
            ["📧", contact.email],
            ["🌐", contact.website],
            ["📸", "@gangotri_foods"],
            ["📘", "Gangotri Foods"],
          ].map(([icon, val]) => (
            <div key={val} style={{ display:"flex", gap:8, marginBottom:"0.8rem", color:"rgba(255,255,255,0.42)", fontSize:"0.82rem", whiteSpace:"pre-line" }}>
              <span style={{ color:"#E8A020", flexShrink:0 }}>{icon}</span>{val}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:"1.4rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem", fontSize:"0.76rem", color:"rgba(255,255,255,0.26)" }}>
        <span>© {year} {brand.name}. All rights reserved.</span>
        <span>Made with ❤️ in Bihar, India 🇮🇳</span>
        <em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.16)" }}>"{brand.hindiTagline}"</em>
      </div>

      <style>{`
        @media(max-width:900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media(max-width:600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
