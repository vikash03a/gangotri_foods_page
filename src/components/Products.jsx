// ─── Products Section ───
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data/products";
import { TURMERIC_IMG, CHILLI_IMG, CORIANDER_IMG } from "../assets/images";

const IMAGE_MAP = {
  turmeric:  TURMERIC_IMG,
  chilli:    CHILLI_IMG,
  coriander: CORIANDER_IMG,
};

export default function Products() {
  return (
    <section
      id="products"
      style={{ padding:"6rem 5%", background:"#FDFAF4", width:"100%", boxSizing:"border-box" }}
    >
      <FadeIn>
        <SectionHeader
          tag="Our Products"
          title={<>Pure Spices, <em style={{ fontStyle:"italic", color:"#C4800A" }}>Straight from Nature</em></>}
          desc="Grown on our own fields, processed in-house, and delivered fresh to your family."
        />
      </FadeIn>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"1.8rem" }}>
        {PRODUCTS.map((product, i) => (
          <FadeIn key={product.key} delay={i * 90}>
            <ProductCard product={product} image={IMAGE_MAP[product.key]} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
