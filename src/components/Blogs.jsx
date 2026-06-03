import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import turmericPujaImg from "../assets/blog-turmeric-puja.jpeg";
import spicePacketsPujaImg from "../assets/blog-spice-packets-puja.jpeg";
import spicePackets from "../assets/blog-spice-puja.jpeg";
import { CORIANDER_IMG } from "../assets/images";

const BLOGS = [
  {
    title: "Why Pure Turmeric Belongs in Every Indian Kitchen",
    category: "Turmeric",
    date: "June 2026",
    image: turmericPujaImg,
    excerpt:
      "Turmeric is more than a bright yellow spice. In Indian homes it carries the feeling of care, prayer, and everyday wellness. Gangotri Foods turmeric powder is made to keep that natural color, earthy aroma, and homely taste alive in every spoon.",
  },
  {
    title: "Spices That Start With Blessings",
    category: "Tradition",
    date: "June 2026",
    image: spicePacketsPujaImg,
    excerpt:
      "Good food begins with good intention. From red chilli to coriander and turmeric, our spice packs are prepared with the same respect families give to ingredients used in daily meals, festivals, and special offerings.",
  },
  {
    title: "How Fresh Coriander Powder Changes Everyday Cooking",
    category: "Kitchen Tips",
    date: "June 2026",
    image: spicePackets,
    excerpt:
      "A pinch of coriander powder can soften heat, deepen flavor, and bring balance to sabzi, dal, chutney, and curries. Freshly processed coriander keeps its natural aroma, helping simple home recipes taste fuller without overpowering them.",
  },
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      style={{
        padding: "6rem 5%",
        background: "#FFF9EF",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <FadeIn>
        <SectionHeader
          tag="Blogs"
          title={
            <>
              Stories of <em style={{ fontStyle: "italic", color: "#C4800A" }}>Purity</em> and Taste
            </>
          }
          desc="Read about our spices, traditions, and simple ways to bring authentic flavor into everyday meals."
          center
        />
      </FadeIn>

      <div className="blogs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1.4rem" }}>
        {BLOGS.map((blog, index) => (
          <FadeIn key={blog.title} delay={index * 90}>
            <article
              style={{
                height: "100%",
                background: "#FFFFFF",
                border: "1px solid rgba(93,58,26,0.08)",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 16px 38px rgba(93,58,26,0.08)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ aspectRatio: "4 / 3", overflow: "hidden", background: "#F5EBE0" }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "1.35rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: "0.7rem" }}>
                  <span
                    style={{
                      color: "#9B2F12",
                      background: "#FFF1DF",
                      border: "1px solid rgba(196,128,10,0.16)",
                      borderRadius: 999,
                      padding: "0.28rem 0.7rem",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {blog.category}
                  </span>
                  <span style={{ color: "#8B7355", fontSize: "0.78rem", fontWeight: 600 }}>{blog.date}</span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    lineHeight: 1.25,
                    color: "#1A0A00",
                    marginBottom: "0.7rem",
                  }}
                >
                  {blog.title}
                </h3>

                <p style={{ color: "#8B7355", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "1rem", flex: 1 }}>
                  {blog.excerpt}
                </p>

                <a
                  href="#contact"
                  style={{
                    alignSelf: "flex-start",
                    color: "#5D3A1A",
                    fontSize: "0.84rem",
                    fontWeight: 800,
                    borderBottom: "2px solid #E8A020",
                    paddingBottom: 3,
                  }}
                >
                  Ask about this spice
                </a>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media(max-width:1000px) {
          .blogs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }

        @media(max-width:680px) {
          .blogs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
