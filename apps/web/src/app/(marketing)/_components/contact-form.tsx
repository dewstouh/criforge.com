"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage("Your message has been sent to the shadows...");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("The darkness rejected your message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-red-950/20 to-black p-8 rounded-lg border border-red-800/30">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-red-300 text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="gothic-input w-full px-4 py-3 rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-red-300 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="gothic-input w-full px-4 py-3 rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-red-300 text-sm font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="gothic-input w-full px-4 py-3 rounded-lg resize-none"
            placeholder="Speak your mind..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="gothic-button w-full py-3 px-6 rounded-lg text-lg font-semibold"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitMessage && (
          <p className="text-center text-red-300 text-sm mt-4">
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  );
}
