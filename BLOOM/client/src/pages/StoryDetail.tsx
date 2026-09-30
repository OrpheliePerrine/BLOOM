import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { Link, useParams } from "wouter";
import { getStory, stories } from "../data/content";
import StoryCard from "../components/StoryCard";

export default function StoryDetail() {
  const { id } = useParams();
  const story = id ? getStory(id) : undefined;

  if (!story) {
    return (
      <main className="not-found">
        <h1>Story not found</h1>
        <p>It may have been moved or unpublished.</p>
        <Link href="/stories" className="button button-dark" style={{ marginTop: 16 }}>
          Back to stories
        </Link>
      </main>
    );
  }

  const more = stories.filter((s) => s.id !== story.id);

  return (
    <main className="section">
      <div className="detail-wrap">
        <Link href="/stories" className="back-link">
          <ArrowLeft size={15} /> All stories
        </Link>
        <div className="detail-hero">
          <img src={story.image} alt={story.title} />
        </div>
        <div className="detail-meta">
          <span>{story.creator}</span>
          <span>
            <MapPin size={13} /> {story.location}
          </span>
          <span className={`story-tag ${story.accent}`} style={{ position: "static" }}>
            {story.category}
          </span>
        </div>
        <h1 className="detail-title">{story.title}</h1>
        <div className="detail-body">
          {story.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      {more.length > 0 && (
        <>
          <div className="market-heading" style={{ marginTop: 64 }}>
            <div>
              <span className="section-kicker">KEEP READING</span>
              <h3>
                More from the <em>field.</em>
              </h3>
            </div>
            <Link href="/stories" className="outline-button">
              All stories <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="story-grid">
            {more.map((s, i) => (
              <StoryCard key={s.id} story={s} index={i} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}