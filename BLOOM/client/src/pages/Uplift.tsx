import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { opportunities } from "../data/content";

export default function Uplift() {
  return (
    <main className="section uplift-section" style={{ paddingTop: 64 }}>
      <div className="uplift-intro">
        <p className="eyebrow">
          <span className="eyebrow-line" /> More than a marketplace
        </p>
        <h2>
          Make your next
          <br />
          <em>move.</em>
        </h2>
        <p>
          Visibility is a start. ALCHE connects creative ambition to the mentors, capital, and
          rooms that help it grow.
        </p>
        <Link href="/join" className="button button-terracotta">
          Find your pathway <ArrowRight size={16} />
        </Link>
      </div>
      <div className="opportunity-list">
        {opportunities.map((opportunity, index) => (
          <Link href="/join" className="opportunity-row" key={opportunity.title}>
            <span className="opportunity-index">0{index + 1}</span>
            <span className="opportunity-label">{opportunity.label}</span>
            <span className="opportunity-copy">
              <strong>{opportunity.title}</strong>
              <small>{opportunity.meta}</small>
            </span>
            <ArrowRight size={18} className="opportunity-arrow" />
          </Link>
        ))}
        <div className="uplift-note">
          <Sparkles size={16} />
          <span>Resources are intentionally built to be low-bandwidth, human, and useful.</span>
        </div>
      </div>
    </main>
  );
}