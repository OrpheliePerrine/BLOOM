import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { products } from "../data/content";
import ProductCard from "../components/ProductCard";

export default function Market() {
  return (
    <main className="section market-section" style={{ paddingTop: 48 }}>
      <div className="market-banner">
        <div>
          <p className="eyebrow light">
            <span className="eyebrow-line" /> Direct market access
          </p>
          <h2>
            Buy the story.
            <br />
            <em>Keep the value close.</em>
          </h2>
        </div>
        <p>
          Every piece here has a person, a place, and a process behind it. When you buy directly,
          you make the whole ecosystem stronger.
        </p>
      </div>
      <div className="market-heading">
        <div>
          <span className="section-kicker">THE MARKET</span>
          <h3>
            Objects with <em>origin.</em>
          </h3>
        </div>
        <Link href="/join" className="outline-button">
          Sell on BLOOM <ArrowUpRight size={15} />
        </Link>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}