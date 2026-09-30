import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { useSearch } from "wouter";
import { filters, stories } from "../data/content";
import StoryCard from "../components/StoryCard";

export default function Stories() {
  const queryString = useSearch();
  const initialQuery = new URLSearchParams(queryString).get("q") ?? "";
  const [search, setSearch] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState("All stories");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return stories.filter((story) => {
      const matchesFilter = activeFilter === "All stories" || story.category === activeFilter;
      const matchesSearch =
        !q ||
        [story.title, story.creator, story.location, story.category]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="section stories-section" style={{ paddingTop: "48px" }}>
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
        </div>
      </div>

      <div className="story-toolbar">
        <label className="search-control" aria-label="Search stories" style={{ maxWidth: 320 }}>
          <Search size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stories or makers"
          />
        </label>
        <div className="filter-tabs" role="tablist" aria-label="Filter stories">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <span className="result-count">
          {filtered.length} stories to explore <ChevronDown size={15} />
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="story-grid">
          {filtered.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={22} />
          <strong>No stories found</strong>
          <p>Try another phrase or reset the filters.</p>
          <button
            className="text-button"
            onClick={() => {
              setSearch("");
              setActiveFilter("All stories");
            }}
          >
            Reset discovery <ArrowRight size={15} />
          </button>
        </div>
      )}
    </main>
  );
}