// ─── SectionHeader Component ───
// Reusable header used at the top of every section.
// Usage:
//   <SectionHeader tag="Our Products" title={<>Pure Spices, <em>Straight from Nature</em></>} desc="..." center />

export default function SectionHeader({ tag, title, desc, center = false, light = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "3.2rem" }}>
      {tag && (
        <div style={{
          fontSize:"0.7rem", fontWeight:700,
          letterSpacing:"0.2em", textTransform:"uppercase",
          color: light ? "rgba(232,160,32,0.8)" : "#C4800A",
          marginBottom:"0.5rem",
        }}>{tag}</div>
      )}
      <h2 style={{
        fontFamily:  "'Playfair Display', serif",
        fontSize:    "clamp(1.8rem, 3.2vw, 2.7rem)",
        fontWeight:  800,
        lineHeight:  1.2,
        color:       light ? "white" : "#1A0A00",
        marginBottom: desc ? "0.6rem" : 0,
      }}>{title}</h2>
      {desc && (
        <p style={{
          fontSize:  "1rem",
          lineHeight: 1.8,
          color:     light ? "rgba(255,255,255,0.6)" : "#8B7355",
          maxWidth:  "560px",
          margin:    center ? "0 auto" : 0,
        }}>{desc}</p>
      )}
    </div>
  );
}
