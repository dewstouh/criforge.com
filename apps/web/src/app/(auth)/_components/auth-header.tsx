import Link from "next/link";
import "../../(marketing)/styles.css";

export function AuthHeader() {
  return (
    <div className="text-center mb-8">
      <h1 className="gothic-text text-4xl mb-2">SALVA-JE</h1>
      <Link
        href="/landing"
        className="text-red-400 hover:text-red-300 transition-colors text-sm"
      >
        ← Back to landing page
      </Link>
    </div>
  );
}
