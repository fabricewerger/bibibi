"use client";

import React from "react";
import ImageGrid from "@/src/ui/components/zoom/ImageGrid";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function Home() {
  const router = useRouter();
  const [timeline] = useState<GSAPTimeline>(
    gsap.timeline({
      paused: true,
      onComplete: () => router.push("/projects/zoom/zoom-detail"),
    })
  );

  return (
    <div className="flex items-center justify-between">
      <ImageGrid timeline={timeline} />
    </div>
  );
}
