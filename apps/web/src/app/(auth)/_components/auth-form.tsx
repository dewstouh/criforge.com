"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  type: "login" | "signup";
}

export function AuthForm({ type }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (type === "signup" && formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const endpoint = type === "login" ? "/api/auth/signin" : "/api/auth/signup";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || `${type} failed`);
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="email-address" className="block text-sm font-medium text-red-300 mb-2">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="gothic-input w-full px-3 py-2 rounded-md text-white"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-red-300 mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={type === "login" ? "current-password" : "new-password"}
            required
            className="gothic-input w-full px-3 py-2 rounded-md text-white"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {type === "signup" && (
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-red-300 mb-2">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="gothic-input w-full px-3 py-2 rounded-md text-white"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center bg-red-900/20 border border-red-900 rounded-md p-3">
          {error}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="gothic-button w-full py-3 px-4 rounded-md text-lg font-medium"
        >
          {isLoading 
            ? (type === "login" ? "Signing in..." : "Creating account...")
            : (type === "login" ? "Sign in" : "Create account")
          }
        </button>
      </div>
    </form>
  );
}
