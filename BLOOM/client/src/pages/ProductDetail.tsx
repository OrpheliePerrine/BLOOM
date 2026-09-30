import { ArrowLeft, ArrowUpRight, MapPin, ShoppingBag } from "lucide-react";
import { Link, useParams } from "wouter";
import { toast } from "sonner";
import { getProduct, products } from "../data/content";
import { useBag } from "../components/BagContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const { add } = useBag();

  if (!product) {
    return (
      <main className="not-found">
        <h1>Piece not found</h1>
        <p>It may have sold out or been removed.</p>
        <Link href="/market" className="button button-dark" style={{ marginTop: 16 }}>
          Back to the market
        </Link>
      </main>
    );
  }

  const more = products.filter((p) => p.id !== product.id && p.maker === product.maker);
  const related = more.length > 0 ? more : products.filter((p) => p.id !== product.id).slice(0, 2);

  const addToBag = () => {
    add();
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <main className="section">
      <div className="detail-wrap">
        <Link href="/market" className="back-link">
          <ArrowLeft size={15} /> Back to the market
        </Link>
        <div className="detail-hero">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-meta">
          <span className="product-tag" style={{ position: "static" }}>
            {product.tag}
          </span>
          <span>{product.maker}</span>
          <span>
            <MapPin size={13} /> {product.origin}
          </span>
        </div>
        <h1 className="detail-title">{product.name}</h1>
        <div className="detail-body">
          <p>{product.description}</p>
          <p>
            <strong>Materials:</strong> {product.materials}
          </p>
        </div>
        <div className="detail-price-row">
          <strong>{product.price}</strong>
          <button className="button button-dark" onClick={addToBag}>
            Add to bag <ShoppingBag size={16} />
          </button>
        </div>
      </div>

      <div className="market-heading" style={{ marginTop: 64 }}>
        <div>
          <span className="section-kicker">KEEP EXPLORING</span>
          <h3>
            More pieces with <em>origin.</em>
          </h3>
        </div>
        <Link href="/market" className="outline-button">
          All pieces <ArrowUpRight size={15} />
        </Link>
      </div>
      <div className="product-grid">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}