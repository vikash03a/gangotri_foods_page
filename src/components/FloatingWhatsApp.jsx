// ─── FloatingWhatsApp Component ───
// Fixed WhatsApp button visible on every page scroll position.
// Update the phone number in src/data/siteConfig.js

import { useState, useEffect } from "react";
import siteConfig from "../data/siteConfig";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  // Delay appearance by 2s so it doesn't distract on load
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const { whatsapp } = siteConfig.contact;
  const url = `https://wa.me/${whatsapp}?text=Hi%20Gangotri%20Foods!%20I%20want%20to%20know%20more%20about%20your%20pure%20spices.`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      title="Chat on WhatsApp"
      style={{
        position:   "fixed",
        right:      "1.5rem",
        bottom:     "1.5rem",
        background: "#25D366",
        color:      "white",
        width:      58,
        height:     58,
        borderRadius:"50%",
        display:    "flex",
        alignItems: "center",
        justifyContent:"center",
        fontSize:   "1.7rem",
        boxShadow:  "0 4px 20px rgba(37,211,102,0.45)",
        zIndex:     999,
        animation:  "waPulse 2.5s ease infinite",
        transition: "transform 0.25s",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      💬
      <style>{`
        @keyframes waPulse {
          0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); }
          50%      { box-shadow: 0 4px 38px rgba(37,211,102,0.72); }
        }
      `}</style>
    </a>
  );
}
