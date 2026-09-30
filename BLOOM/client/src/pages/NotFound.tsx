import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>This page wandered off the map.</p>
      <Link href="/" className="button button-dark" style={{ marginTop: 16 }}>
        <ArrowLeft size={16} /> Back home
      </Link>
    </main>
  );
}