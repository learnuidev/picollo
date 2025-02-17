"use client";

import { Banner } from "./components/banner";
import { Features } from "./components/features";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Banner />
      <Features />
    </div>
  );
}
