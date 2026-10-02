import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-16 space-y-4 text-sm leading-relaxed">
        <h1 className="text-3xl font-semibold">Terms</h1>
        <p>Cosmic Cafe, Geneva. A booking is confirmed only when the cafe accepts it.</p>
        <p>
          If a prepaid event or a recurring reservation renews, the price and the next charge date are shown beside the payment button. Cancel before that date to stop the next charge.
        </p>
        <p>
          <Link to="/privacy-policy" className="underline">Privacy</Link>
          {" · "}
          <Link to="/dmca" className="underline">Copyright</Link>
        </p>
      </main>
    </div>
  );
}
