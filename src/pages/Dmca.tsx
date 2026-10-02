import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function Dmca() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-16 space-y-4 text-sm leading-relaxed">
        <h1 className="text-3xl font-semibold">Copyright / DMCA</h1>
        <p>
          Copyright notices for Cosmic Cafe go through the contact details on the site. Include your name, the work, where it appears, and a statement that the notice is accurate.
        </p>
        <p>
          A US DMCA agent is registered separately on the Designated Agent Directory at copyright.gov. The filing asks for a service name, a physical address, a phone number, an email, and a fee that is currently 6 US dollars. This page does not submit that filing.
        </p>
        <Link to="/privacy-policy" className="underline">Privacy</Link>
      </main>
    </div>
  );
}
