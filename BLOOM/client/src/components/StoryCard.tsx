import { useState } from "react";
import { ArrowUpRight, Bookmark, Heart, MapPin, MessageCircle, Star } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import type { Story } from "../data/content";

export default function StoryCard({ story, index = 0 }: { story: Story; index?: number }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className={`story-card story-${(index % 3) + 1}`}>
      <div className="story-image-wrap">
        <img src={story.image} alt={story.title} />
        <span className={`story-tag ${story.accent}`}>{story.category}</span>
        {story.featured && (
          <span className="featured-stamp">
            <Star size={12} fill="currentColor" /> Featured
          </span>
        )}
        <button
          className={`save-button ${saved ? "saved" : ""}`}
          onClick={() => {
            setSaved((s) => !s);
            toast.success(saved ? "Story removed from your shelf" : "Story saved to your shelf");
          }}
          aria-label={saved ? "Remove saved story" : "Save story"}
        >
          <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="story-content">
        <div className="story-meta">
          <span>{story.creator}</span>
          <span>
            <MapPin size={12} /> {story.location}
          </span>
        </div>
        <h3>{story.title}</h3>
        <div className="story-footer">
          <div className="story-stats">
            <button
              className={liked ? "liked" : ""}
              onClick={() => {
                setLiked((l) => !l);
                toast.success(liked ? "Removed from your appreciations" : "Added to your appreciations");
              }}
            >
              <Heart size={15} fill={liked ? "currentColor" : "none"} /> {story.likes + (liked ? 1 : 0)}
            </button>
            <span>
              <MessageCircle size={14} /> {story.comments}
            </span>
          </div>
          <Link href={`/stories/${story.id}`} className="read-link">
            Read story <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}