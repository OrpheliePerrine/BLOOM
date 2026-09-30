import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import type { Product } from "../data/content";
import { useBag } from "./BagContext";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useBag();

  const addToBag = () => {
    add();
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link href={`/market/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <span className="product-tag">{product.tag}</span>
        <button className="product-quick" onClick={addToBag} aria-label={`Add ${product.name} to bag`}>
          <ShoppingBag size={17} />
        </button>
      </div>
      <div className="product-info">
        <div>
          <h4>{product.name}</h4>
          <p>
            {product.maker} · {product.origin}
          </p>
        </div>
        <strong>{product.price}</strong>
      </div>
      <button className="product-add" onClick={addToBag}>
        Add to bag <ArrowUpRight size={15} />
      </button>
    </article>
  );
}