"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

// Define your PopupContactSchema
const PopupContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
});

// Infer the form data type from the schema
type PopupContactFormData = z.infer<typeof PopupContactSchema>;

interface ExitIntentFormProps {
  onSuccess: () => void;
}

export default function ExitIntentForm({ onSuccess }: ExitIntentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PopupContactFormData>({
    resolver: zodResolver(PopupContactSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: PopupContactFormData) => {
    try {
      setIsSubmitting(true);
      setError("");

      // Send data to the API endpoint
      await axios.post("/api/popup", data);

      // Trigger PDF download from public/pdf/file.pdf
      const link = document.createElement("a");
      link.href = "/pdf/file.pdf";
      link.download = "file.pdf"; // desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message and reset form
      setSuccess(true);
      reset();
      onSuccess();
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {error && (
          <div className="bg-red-100 text-red-700 border border-red-600 rounded-md p-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 border border-green-500 rounded-md p-4">
            Form submitted successfully!
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-base font-semibold mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-3 py-2  text-lg bg-white bg-opacity-20 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder-gray-200"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-200 mt-px text-sm">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-semibold mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 text-lg bg-white bg-opacity-20 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder-gray-200"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-200 mt-px text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`whitespace-nowrap px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
              !isSubmitting
                ? "bg-yellow-400 text-purple-900 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            🚀 Download Your Free PDF Now!
            {isSubmitting && (
              <span className="ml-2 inline-block h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
