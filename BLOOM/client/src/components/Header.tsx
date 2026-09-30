import { useState } from "react";
import {
  CircleUserRound,
  Compass,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { Link, useLocation, useRoute } from "wouter";
import { toast } from "sonner";
import { useBag } from "./BagContext";

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  const [active] = useRoute(href);
  return (
    <Link href={href} className={active ? "active" : ""}>
      {icon} {children}
    </Link>
  );
}

export default function Header() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useBag();
  const [, setLocation] = useLocation();

  const submitSearch = () => {
    const q = search.trim();
    setLocation(q ? `/stories?q=${encodeURIComponent(q)}` : "/stories");
    setMenuOpen(false);
  };

  return (
    <>
      <div className="announcement-bar">
        <span>BLOOM / A digital home for African creativity</span>
        <span className="announcement-detail">
          Free community membership · Built for the full story
        </span>
      </div>

      <header className="site-header">
        <Link href="/" className="brand-lockup" aria-label="BLOOM home">
          <span className="brand-mark">B</span>
          <span>
            <strong>BLOOM</strong>
            <small>Arts · Culture · Commerce</small>
          </span>
        </Link>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <NavLink href="/stories" icon={<Compass size={15} />}>Discover</NavLink>
          <NavLink href="/market" icon={<ShoppingBag size={15} />}>Market</NavLink>
          <NavLink href="/uplift" icon={<Sparkles size={15} />}>Uplift</NavLink>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={18} />
          </button>
        </nav>

        <div className="header-actions">
          <label className="search-control" aria-label="Search BLOOM">
            <Search size={16} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitSearch()}
              placeholder="Search the collective"
            />
          </label>
          <button
            className="icon-button header-bag"
            onClick={() =>
              toast.success(count ? `${count} item${count === 1 ? "" : "s"} in your bag` : "Your bag is ready for something beautiful")
            }
            aria-label="Open bag"
          >
            <ShoppingBag size={18} />
            {count > 0 && <span>{count}</span>}
          </button>
          <Link href="/join" className="profile-button">
            <CircleUserRound size={18} />
            <span>Join the collective</span>
          </Link>
          <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={21} />
          </button>
        </div>
      </header>

      <div className="mobile-bottom-bar">
        <NavLink href="/stories" icon={<Compass size={17} />}>Discover</NavLink>
        <NavLink href="/market" icon={<ShoppingBag size={17} />}>Market</NavLink>
        <NavLink href="/uplift" icon={<Sparkles size={17} />}>Uplift</NavLink>
        <NavLink href="/join" icon={<CircleUserRound size={17} />}>You</NavLink>
      </div>
    </>
  );
}