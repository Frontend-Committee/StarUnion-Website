import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorFallback() {
  const error = useRouteError();
  const handleReload = () => {
    window.location.reload();
  };
  const errorMessage =
    error?.message || error?.data?.message || error?.statusText;
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-gradientBg3">
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-8 text-center border md:p-12 bg-bg33/50 backdrop-blur-md rounded-card border-primary/20 shadow-soft">
        <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-error/10 text-error shadow-soft">
          <svg
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="mb-3 text-h3 text-textInvert">
          Oops! Something went wrong
        </h2>
        <p className="mb-8 text-body text-muted">
          {errorMessage ||
            "We couldn't load the data at this moment. Please try again or return home."}
        </p>

        <div className="flex flex-col justify-center w-full gap-4 sm:flex-row">
          <button
            onClick={handleReload}
            className="px-6 py-3 bg-gradientFooter text-white rounded-full font-bold text-body hover:shadow-[0_0_15px_rgba(17,237,164,0.4)] hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Try Again
          </button>

          <Link
            to="/"
            className="flex items-center justify-center px-6 py-3 font-bold transition-all duration-300 bg-transparent border-2 rounded-full border-primary/50 text-textInvert text-body hover:bg-primary/10 hover:border-primary active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
