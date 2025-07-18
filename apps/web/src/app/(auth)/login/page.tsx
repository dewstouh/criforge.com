import { Metadata } from "next";
import { AuthHeader } from "../_components/auth-header";
import { AuthForm } from "../_components/auth-form";
import { AuthLinks } from "../_components/auth-links";

export const metadata: Metadata = {
  title: "Sign In | SALVA-JE",
  description: "Sign in to your SALVA-JE account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AuthHeader />
        
        <div className="text-center">
          <h2 className="gothic-text text-2xl mb-8">
            Sign in to your account
          </h2>
        </div>
        
        <AuthForm type="login" />
        
        <AuthLinks type="login" />
      </div>
    </div>
  );
}
