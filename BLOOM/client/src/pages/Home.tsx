import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { products, stories } from "../data/content";
import StoryCard from "../components/StoryCard";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main id="top">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> A new narrative is being made
          </p>
          <h1>
            Let the work speak. <em>Let the story travel.</em>
          </h1>
          <p className="hero-intro">
            A living platform for African women shaping what comes next — through craft, image,
            design, and the courage to be seen on their own terms.
          </p>
          <div className="hero-actions">
            <Link href="/stories" className="button button-dark">
              Explore the collective <ArrowUpRight size={16} />
            </Link>
            <Link href="/join" className="text-button">
              Share your story <ArrowRight size={15} />
            </Link>
          </div>
          <div className="hero-note">
            <div className="avatar-stack" aria-hidden="true">
              <span>NM</span>
              <span>AD</span>
              <span>LM</span>
              <span>+</span>
            </div>
            <p>
              <strong>1,240+ women</strong>
              <br />
              are building in public with us
            </p>
          </div>
        </div>

        <div className="hero-collage">
          <div className="hero-image-main">
            <img
              src="https://i.pinimg.com/1200x/ca/1c/84/ca1c84883ec012d76bacbff113c988f8.jpg"
              alt="Women together in a creative studio"
            />
            <div className="image-caption">
              <span>01 / 04</span>
              <span>Make room for the makers</span>
            </div>
          </div>
          <div className="hero-image-detail">
            <img
              src="https://i.pinimg.com/736x/4b/85/37/4b85379af657d77cadc7581fe14241f3.jpg"
              alt="Portrait of a woman artist"
            />
            <span className="detail-stamp">
              THE
              <br />
              COLLECTIVE
            </span>
          </div>
          <div className="floating-quote">
            <span className="quote-mark">“</span>
            <p>Our stories are not a footnote. They are the blueprint.</p>
            <small>—BLOOM community note, 2026</small>
          </div>
          <div className="sun-disc" aria-hidden="true" />
        </div>
      </section>

      <section className="loop-strip" aria-label="The BLOOM loop">
        <div className="loop-intro">
          <span>OUR LOOP</span>
          <strong>Designed to move with you</strong>
        </div>
        <div className="loop-step">
          <span className="loop-number">01</span>
          <span>Discover</span>
          <small>Find the feeling</small>
        </div>
        <div className="loop-connector" />
        <div className="loop-step">
          <span className="loop-number">02</span>
          <span>Connect</span>
          <small>Meet the maker</small>
        </div>
        <div className="loop-connector" />
        <div className="loop-step">
          <span className="loop-number">03</span>
          <span>Monetize</span>
          <small>Back the work</small>
        </div>
        <div className="loop-connector" />
        <div className="loop-step">
          <span className="loop-number">04</span>
          <span>Uplift</span>
          <small>Pass it forward</small>
        </div>
      </section>

      <section className="section stories-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> From the field
            </p>
            <h2>
              Stories with a <em>pulse.</em>
            </h2>
          </div>
          <div className="section-side-copy">
            <p>
              Not a feed to scroll past. A place to slow down, listen closely, and see the hands
              behind the work.
            </p>
            <Link href="/stories" className="circle-arrow" aria-label="All stories">
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="story-grid">
          {stories.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
      </section>

      <section className="section market-section">
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
            <span className="section-kicker">THE MARKET / 01</span>
            <h3>
              Objects with <em>origin.</em>
            </h3>
          </div>
          <Link href="/market" className="outline-button">
            View all pieces <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-image">
          <img
            src="https://i.pinimg.com/736x/57/1c/38/571c3827b3e4587c081046c86ce8b3d9.jpg"
            alt="Friends laughing together outside"
          />
          <div className="closing-image-overlay" />
        </div>
        <div className="closing-copy">
          <span className="section-kicker">THE INVITATION</span>
          <h2>
            There is room
            <br />
            for your <em>voice.</em>
          </h2>
          <p>
            For the maker, the collector, the connector, the curious. Come as you are. Leave a
            little more connected.
          </p>
          <Link href="/join" className="button button-light">
            Enter the collective <ArrowUpRight size={16} />
          </Link>
          <div className="closing-signature">
            <span>BLOOM</span>
            <small>Made for the women shaping Africa's next chapter.</small>
          </div>
        </div>
      </section>
    </main>
  );
}