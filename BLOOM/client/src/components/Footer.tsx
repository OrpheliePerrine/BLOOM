import { CircleUserRound, Instagram } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="brand-mark">B</span>
        <div>
          <strong>BLOOM</strong>
          <p>
            A living archive
            <br />
            for what is next.
          </p>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <span>Explore</span>
          <Link href="/stories">Stories</Link>
          <Link href="/market">Market</Link>
          <Link href="/uplift">Opportunities</Link>
        </div>
        <div>
          <span>Connect</span>
          <Link href="/join">Join the collective</Link>
          <button onClick={() => toast.success("Instagram opens soon")}>Instagram</button>
          <button onClick={() => toast.success("Contact form is coming soon")}>Contact</button>
        </div>
      </div>
      <div className="footer-last">
        <p>Built with care, in public.</p>
        <div className="footer-social">
          <button onClick={() => toast.success("Instagram opens soon")} aria-label="Instagram">
            <Instagram size={17} />
          </button>
          <Link href="/join" aria-label="Profile">
            <CircleUserRound size={17} />
          </Link>
        </div>
        <small>© 2026 BLOOM COLLECTIVE</small>
      </div>
    </footer>
  );
}