import Link from "next/link";

interface AuthLinksProps {
  type: "login" | "signup";
}

export function AuthLinks({ type }: AuthLinksProps) {
  if (type === "login") {
    return (
      <div className="text-center">
        <p className="text-red-300">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-red-500 hover:text-red-400 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-red-300">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-red-500 hover:text-red-400 transition-colors"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
