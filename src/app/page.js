"use client";

import Navbar from "@/components/common/Navbar";
import Analytics from "@/components/home/Analytics";
import Hero from "@/components/home/Hero";
import Recommendations from "@/components/home/Recommendations";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Recommendations/>
    </>
  );
}