"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10 space-y-1">
      <h1 className="text-lg ">Something went wrong</h1>
      <button
        className="hover:text-amber-600 border p-2 border-black hover:border-amber-600"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
