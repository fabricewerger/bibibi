import Pill from "@/src/ui/components/content/Pill";
import Button from "@/src/ui/components/inputs/Button";
import Hero from "@/src/ui/components/zoom/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container px-10">
        <h2 className="text-2xl">Title</h2>
        <p>text</p>
      </div>
    </>
  );
}
