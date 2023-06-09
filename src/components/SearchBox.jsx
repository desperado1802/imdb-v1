"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-2xl mx-auto justify-between items-center px-5 mt-2"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-10 rounded-sm placeholder:gray-500 outline-none bg-transparent flex-1 border border-amber-500 px-4"
      />
      <button
        disabled={!search.trim()}
        type="submit"
        className="text-amber-500 disabled:text-gray-400 ml-2"
      >
        Search
      </button>
    </form>
  );
}
