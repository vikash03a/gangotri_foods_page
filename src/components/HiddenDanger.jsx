import FadeIn from "./FadeIn";

const DANGER_CARDS = [
  {
    accent: "#D8A333",
    label: "Fake Turmeric",
    desc:
      "Lead chromate is commonly added to turmeric to deepen its yellow colour. It causes kidney damage and neurological harm over time.",
  },
  {
    accent: "#DB3657",
    label: "Adulterated Chilli",
    desc:
      "Brick powder, saw dust, and artificial dyes are mixed into red chilli powder to increase weight and intensify colour cheaply.",
  },
  {
    accent: "#45B97C",
    label: "Impure Coriander",
    desc:
      "Horse dung, dried leaves, and starch are sometimes found in coriander powder, making what appears wholesome a health hazard.",
  },
  {
    accent: "#44C978",
    label: "Gangotri Solution",
    desc:
      "We control every stage - farm to kitchen. Our spices are tested for purity and packaged under hygienic conditions. No shortcuts. Ever.",
  },
];

export default function HiddenDanger() {
  return (
    <section
      id="hidden-danger"
      style={{
        padding: "4.5rem 5% 6rem",
        background: "#FFF4F4",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <FadeIn>
        <div
          className="danger-banner"
          style={{
            display: "grid",
            gridTemplateColumns: "92px 1fr",
            gap: "1.4rem",
            alignItems: "center",
            background: "linear-gradient(135deg,#A52A22,#C2382C)",
            borderRadius: 22,
            padding: "3.3rem 4rem",
            color: "white",
            boxShadow: "0 22px 46px rgba(165,42,34,0.18)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#FFB94E",
              color: "#7B241C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.2rem",
              fontWeight: 900,
              clipPath: "polygon(50% 0, 100% 90%, 0 90%)",
              paddingTop: 8,
            }}
          >
            !
          </div>

          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                lineHeight: 1.15,
                marginBottom: "0.85rem",
                color: "white",
              }}
            >
              The Hidden Danger in Your Kitchen
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", maxWidth: 1260 }}>
              Studies have found alarming adulterants in common Indian spices: lead chromate in turmeric powder
              to enhance yellow colour, brick powder mixed in chilli, and even sawdust or starch in coriander.
              These silent contaminants slowly poison your family's health. It's time to know what you're cooking with.
            </p>
          </div>
        </div>
      </FadeIn>

      <div
        className="danger-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "1.6rem",
          marginTop: "3.5rem",
        }}
      >
        {DANGER_CARDS.map((card, index) => (
          <FadeIn key={card.label} delay={index * 70}>
            <article
              style={{
                height: "100%",
                background: "#FFFFFF",
                borderRadius: 14,
                padding: "2rem 1.8rem",
                borderLeft: `4px solid ${card.accent}`,
                boxShadow: "0 18px 36px rgba(93,58,26,0.06)",
              }}
            >
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  color: "#8B1E16",
                  fontSize: "1.05rem",
                  lineHeight: 1.3,
                  marginBottom: "0.8rem",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 30% 30%, #FFFFFF66, ${card.accent})`,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {card.label}
              </h3>
              <p style={{ color: "#7A6045", fontSize: "0.95rem", lineHeight: 1.72 }}>{card.desc}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media(max-width:1050px) {
          .danger-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }

        @media(max-width:720px) {
          .danger-banner {
            grid-template-columns: 1fr !important;
            padding: 2rem 1.4rem !important;
          }

          .danger-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
