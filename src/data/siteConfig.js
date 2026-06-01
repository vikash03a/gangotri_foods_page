// ─── Site Config ───
// Edit your brand info, contact details, and social links here.

const siteConfig = {
  brand: {
    name:    "Gangotri Foods",
    tagline: "The Taste of Tradition",
    hindiTagline: "शुद्ध मसाले, स्वस्थ परिवार",
    fssai:   "20425062000308",
    origin:  "Muzaffarpur, Bihar",
    founded: "2024",
  },

  contact: {
    whatsapp:  "+917322010746",   // update your WhatsApp number here   
    email:     "gangotrifoods.in@gmail.com",
    address:   "Meghua, Muzaffarpur\nBihar – 843153, India",
    website:   "www.gangotrifoods.in",
  },

  social: {
    instagram: "https://instagram.com/gangotri_foods",
    facebook:  "https://www.facebook.com/profile.php?id=61579119865795",
    email:     "mailto:gangotrifoods.in@gmail.com",
  },

  hero: {
    heading:      "From Our Farms to Your Kitchen",
    subheading:   "शुद्ध मसाले, स्वस्थ परिवार",
    description:  "100% pure spices — no artificial colour, no chemicals, no adulteration. Grown on our own farms in Muzaffarpur and delivered straight to your kitchen with love.",
    badge:        "Bihar's Pride · Muzaffarpur",
    stats: [
      { value: "100%", label: "Pure & Natural" },
      { value: "Zero", label: "Chemicals"      },
      { value: "3",    label: "Spice Variants" },
      { value: "FSSAI",label: "Certified"      },
    ],
  },

  whyUs: [
    { icon: "🌟", title: "100% Pure Spices",     desc: "No fillers, no mixing. What you see is exactly what you get."              },
    { icon: "🎨", title: "No Artificial Colour",  desc: "Pure gold from real turmeric, vibrant red from real chilies."              },
    { icon: "🧪", title: "Chemical Free",         desc: "Zero synthetic pesticides, preservatives, or additives. Ever."             },
    { icon: "🚜", title: "Farm Fresh",            desc: "Directly from family-owned fields in Muzaffarpur, Bihar."                  },
    { icon: "⚙️", title: "Traditional Grinding", desc: "Stone-ground in-house to preserve essential oils & flavour."               },
    { icon: "👃", title: "Rich Aroma",            desc: "The intoxicating fragrance of truly fresh, authentic spices."              },
    { icon: "👨‍👩‍👧", title: "Healthy for Family",  desc: "Safe for children and elders. Pure nutrition, zero compromise."           },
    { icon: "📦", title: "Hygienic Packaging",    desc: "Airtight sealed — freshness guaranteed for 6 months."                     },
  ],

  journey: [
    { icon: "🌱", step: "01", title: "Sowing",      desc: "Seeds planted on family farms in fertile Muzaffarpur soil"          },
    { icon: "🌾", step: "02", title: "Harvest",     desc: "Hand-harvested at peak ripeness for maximum flavour"                },
    { icon: "☀️", step: "03", title: "Sun Drying",  desc: "Naturally dried to preserve colour, aroma, and nutrition"           },
    { icon: "⚙️", step: "04", title: "Grinding",    desc: "In-house stone-grinding retains essential oils"                     },
    { icon: "📦", step: "05", title: "Packaging",   desc: "Hygienically sealed in airtight packs"                              },
    { icon: "🍳", step: "06", title: "Your Kitchen",desc: "Pure spices arrive ready to transform your cooking"                 },
  ],

  testimonials: [
    { text: "Maine pehli baar Gangotri ki haldi use ki — uski khushbu aur colour dekhke dil khush ho gaya! Ab poori family ko sirf Gangotri chahiye. Sachchi purity hai isme.", name: "Priya Devi",    loc: "Patna, Bihar"        },
    { text: "As a health-conscious mother, Gangotri Foods gave me complete peace of mind. The aroma of their coriander is unlike anything from supermarkets. Truly farm-fresh!",  name: "Anita Singh",   loc: "Muzaffarpur, Bihar"  },
    { text: "Jab se Gangotri ki mirch use ki, sabzi ka rang aur swad dono badh gaye. Koi artificial colour nahi, fir bhi itna sundar rang. Ekdum asli — Muzaffarpur ki mitti ka jaadu!", name: "Ranjit Kumar",  loc: "Muzaffarpur, Bihar"  },
    { text: "I read about spice adulteration and switched to Gangotri Foods. The difference is night and day — you can literally smell the purity. Supporting Bihar farmers too!", name: "Sanjay Prasad", loc: "Vaishali, Bihar"      },
    { text: "Ghar mein dadi karti thi aise hi masale apne khet se. Gangotri Foods ne wahi feeling wapas di — bachpan ki yaad aa gayi. Pure, natural, ekdum desi.",               name: "Savitri Jha",   loc: "Darbhanga, Bihar"    },
    { text: "Ordered 450g turmeric for our restaurant. Colour, aroma, and consistency are far superior to commercial brands. Our customers noticed the food tastes better.",       name: "Mukesh Yadav",  loc: "Hajipur, Bihar"      },
  ],

  farmers: [
    { icon: "🧑‍🌾", title: "Supporting Indian Farmers",  desc: "Direct partnerships with local Bihar farmers ensure fair prices and sustainable livelihoods."              },
    { icon: "🇮🇳",  title: "Self-Reliant India",         desc: "Buying Gangotri Foods invests in Indian agriculture and strengthens our economy."                         },
    { icon: "🌿",   title: "Sustainable Agriculture",    desc: "Traditional methods that nourish the land for future generations — no chemical soil depletion."           },
    { icon: "💪",   title: "Bihar's Pride",              desc: "Muzaffarpur's rich agricultural legacy, delivered to every kitchen across India."                        },
  ],
};

export default siteConfig;
