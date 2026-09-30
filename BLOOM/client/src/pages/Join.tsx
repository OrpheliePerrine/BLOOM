import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Artisan / Creator");
  const [bio, setBio] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    toast.success(`Welcome to the collective, ${name.split(" ")[0] || "friend"}!`);
    setName("");
    setEmail("");
    setRole("Artisan / Creator");
    setBio("");
  };

  return (
    <main className="section" style={{ paddingTop: 64 }}>
      <div className="page-heading">
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="eyebrow-line" /> The invitation
        </p>
        <h1>
          Join the <em>collective.</em>
        </h1>
        <p>
          Makers, buyers, mentors and partners — tell us who you are and we will open the right
          door for you.
        </p>
      </div>
      <form className="join-card" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ama Serwaa"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="role">I am joining as</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Artisan / Creator</option>
            <option>Buyer / Collector</option>
            <option>Mentor / Partner</option>
            <option>Institution</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="bio">Tell us about your craft (optional)</label>
          <textarea
            id="bio"
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="What do you make, and where does it come from?"
          />
        </div>
        <button type="submit" className="button button-dark" style={{ width: "100%" }}>
          Enter the collective <ArrowRight size={16} />
        </button>
      </form>
    </main>
  );
}