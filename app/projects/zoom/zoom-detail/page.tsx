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
