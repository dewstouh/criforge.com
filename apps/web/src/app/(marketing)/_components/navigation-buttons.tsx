import Link from "next/link";

export function NavigationButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/login"
        className="gothic-button px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
      >
        Sign In
      </Link>
      <Link
        href="/signup"
        className="gothic-button px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
      >
        Sign Up
      </Link>
    </div>
  );
}
