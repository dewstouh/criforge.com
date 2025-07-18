import { Metadata } from "next";
import { AuthHeader } from "../_components/auth-header";
import { AuthForm } from "../_components/auth-form";
import { AuthLinks } from "../_components/auth-links";

export const metadata: Metadata = {
  title: "Sign Up | SALVA-JE",
  description: "Create your SALVA-JE account",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AuthHeader />
        
        <div className="text-center">
          <h2 className="gothic-text text-2xl mb-8">
            Join the Darkness
          </h2>
        </div>
        
        <AuthForm type="signup" />
        
        <AuthLinks type="signup" />
      </div>
    </div>
  );
}
