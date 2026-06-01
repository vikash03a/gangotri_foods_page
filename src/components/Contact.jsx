// ─── Contact Section ───
import { useState } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import siteConfig from "../data/siteConfig";

// ── Paste your EmailJS credentials here ──
const EMAILJS_SERVICE_ID  = "service_kjnjunt";  
const EMAILJS_TEMPLATE_ID = "template_1s8i4bx";  
const EMAILJS_PUBLIC_KEY  = "qjtY-GfQ4dA6ROrZO";   

const PRODUCTS_LIST = [
  "Select a product...",
  "Turmeric Powder (Haldi)",
  "Red Chilli Powder (Mircha)",
  "Coriander Powder (Dhaniya)",
  "All Products Combo",
  "Bulk / Wholesale Enquiry",
];

const INPUT_STYLE = {
  width:        "100%",
  padding:      "0.72rem 0.95rem",
  border:       "1.5px solid rgba(93,58,26,0.12)",
  borderRadius: 10,
  fontFamily:   "'DM Sans', sans-serif",
  fontSize:     "0.87rem",
  background:   "#FDFAF4",
  outline:      "none",
  transition:   "border 0.25s",
  boxSizing:    "border-box",
};

export default function Contact() {
  const [form, setForm]     = useState({ name: "", phone: "", email: "", product: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState(false);

  const update = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const { contact, social } = siteConfig;
  const waUrl = `https://wa.me/${contact.whatsapp}?text=Hi%20Gangotri%20Foods!%20I%20want%20to%20place%20an%20order.`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // EmailJS sends using the form field values as template variables
    // Your EmailJS template should use: {{name}}, {{phone}}, {{email}}, {{product}}, {{message}}
    const templateParams = {
      name:    form.name,
      phone:   form.phone,
      email:   form.email,
      product: form.product,
      message: form.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: "", phone: "", email: "", product: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
      setTimeout(() => setError(false), 6000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ padding: "6rem 5%", background: "#FFF9EF", width: "100%", boxSizing: "border-box" }}
    >
      <FadeIn>
        <SectionHeader
          tag="Get in Touch"
          title={<>Order Pure Spices <em style={{ fontStyle: "italic", color: "#C4800A" }}>Today</em></>}
          desc="Reach out for orders, bulk enquiries, or any questions. We respond within 24 hours."
        />
      </FadeIn>

      <div
        className="contact-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3.5rem", alignItems: "start" }}
      >
        {/* ── Left: Contact Info ── */}
        <FadeIn>
          <div>
            {[
              { icon: "📍", label: "Location",  value: contact.address  },
              { icon: "📧", label: "Email",     value: contact.email    },
              { icon: "🌐", label: "Website",   value: contact.website  },
              { icon: "💬", label: "WhatsApp",  value: "Fastest way to order!" },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: "flex", gap: "0.9rem", marginBottom: "1.7rem", alignItems: "flex-start" }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: "#FDF3DC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1A0A00", marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: "0.86rem", color: "#8B7355", lineHeight: 1.55, whiteSpace: "pre-line" }}>{value}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#25D366", color: "white", padding: "0.88rem 1.8rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 700, marginBottom: "1.5rem", transition: "background 0.25s", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.background = "#128C7E"}
              onMouseLeave={e => e.currentTarget.style.background = "#25D366"}
            >
              📲 Chat on WhatsApp Now
            </a>

            {/* Social links */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: "📸", href: social.instagram, label: "Instagram" },
                { icon: "📘", href: social.facebook,  label: "Facebook"  },
                { icon: "📧", href: social.email,     label: "Email"     },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  style={{ width: 42, height: 42, borderRadius: 11, background: "#F5EBE0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.15rem", border: "1px solid rgba(93,58,26,0.1)", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#E8A020"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#F5EBE0"; e.currentTarget.style.transform = "none"; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── Right: Contact Form ── */}
        <FadeIn delay={140}>
          <div style={{ background: "white", borderRadius: 24, padding: "2.3rem", boxShadow: "0 10px 40px rgba(93,58,26,0.07)" }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "#1A0A00", marginBottom: "1.4rem", fontWeight: 700 }}>
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit}>

              {/* Success banner */}
              {sent && (
                <div style={{ background: "#E8F5E9", color: "#2E7D32", padding: "0.75rem 1.1rem", borderRadius: 10, marginBottom: "1.1rem", fontSize: "0.86rem", fontWeight: 600 }}>
                  ✅ Message sent! We'll get back to you within 24 hours.
                </div>
              )}

              {/* Error banner */}
              {error && (
                <div style={{ background: "#FFEBEE", color: "#C62828", padding: "0.75rem 1.1rem", borderRadius: 10, marginBottom: "1.1rem", fontSize: "0.86rem", fontWeight: 600 }}>
                  ❌ Failed to send. Please WhatsApp us directly or try again.
                </div>
              )}

              {/* Name + Phone row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                {[["Name", "Your Name", "name", "text"], ["Phone", "Phone Number", "phone", "tel"]].map(([label, placeholder, field, type]) => (
                  <div key={field}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#1A0A00", marginBottom: 4 }}>{label}</label>
                    <input
                      name={field}
                      type={type}
                      value={form[field]}
                      onChange={update(field)}
                      placeholder={placeholder}
                      required={field === "name"}
                      style={INPUT_STYLE}
                      onFocus={e => e.target.style.borderColor = "#E8A020"}
                      onBlur={e  => e.target.style.borderColor = "rgba(93,58,26,0.12)"}
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#1A0A00", marginBottom: 4 }}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  style={INPUT_STYLE}
                  onFocus={e => e.target.style.borderColor = "#E8A020"}
                  onBlur={e  => e.target.style.borderColor = "rgba(93,58,26,0.12)"}
                />
              </div>

              {/* Product dropdown */}
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#1A0A00", marginBottom: 4 }}>Product of Interest</label>
                <select
                  name="product"
                  value={form.product}
                  onChange={update("product")}
                  style={{ ...INPUT_STYLE, cursor: "pointer" }}
                >
                  {PRODUCTS_LIST.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "1.4rem" }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#1A0A00", marginBottom: 4 }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us your order requirements..."
                  style={{ ...INPUT_STYLE, height: 100, resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = "#E8A020"}
                  onBlur={e  => e.target.style.borderColor = "rgba(93,58,26,0.12)"}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{ width: "100%", background: loading ? "#9E7A50" : "#5D3A1A", color: "white", padding: "0.95rem", border: "none", borderRadius: 100, fontSize: "0.93rem", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "#E8A020"; e.currentTarget.style.color = "#3D1F00"; } }}
                onMouseLeave={e => { if (!loading) { e.currentTarget.style.background = "#5D3A1A"; e.currentTarget.style.color = "white"; } }}
              >
                {loading ? "Sending..." : "🌿 Send Message"}
              </button>

            </form>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}