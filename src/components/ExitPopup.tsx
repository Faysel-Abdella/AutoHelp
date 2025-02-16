"use client";

import type React from "react";
import { useState, useEffect } from "react";
import ExitIntentForm from "./ExitIntentForm";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [popupCount, setPopupCount] = useState(0);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem("popupCount") || "0", 10);
    setPopupCount(storedCount);

    // If the document is already downloaded don't show the popup

    const handleExitIntent = () => {
      const isPDFDownloaded = localStorage.getItem("isDownloaded") === "true";
      console.log(isPDFDownloaded);
      if (popupCount < 4 && !isPDFDownloaded) {
        setIsOpen(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
        localStorage.setItem("popupCount", (popupCount + 1).toString());
        setPopupCount((prev) => prev + 1);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) handleExitIntent();
    };

    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      handleExitIntent();
    };

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (lastScrollY - window.scrollY > 50) handleExitIntent();
      lastScrollY = window.scrollY;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) handleExitIntent();
    };

    if (window.innerWidth > 768) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("popstate", handleBackButton);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("popstate", handleBackButton);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [popupCount]);

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen, countdown]);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]"
      onClick={handleClose} // Close when clicking outside
    >
      <div
        className="bg-blue-900 rounded-lg shadow-2xl max-w-md w-full overflow-hidden relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="p-6 text-white">
          <div className="text-center mb-6 animate-bounce">
            <span className="text-6xl">🎉</span>
          </div>
          <h2
            className="text-3xl font-extrabold text-center mb-4 font-sans"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Get your FREE copy NOW!
          </h2>
          <p className="text-lg text-center mb-6 ">
            10 Steps to Buy a Car in the US.
          </p>
          <ExitIntentForm
            onSuccess={() => setIsOpen(false)}
            handleClose={handleClose}
          />
        </div>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-yellow-400 transition-colors duration-300"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
