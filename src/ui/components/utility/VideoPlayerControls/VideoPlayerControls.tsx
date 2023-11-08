import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

import React from "react";

interface VideoPlayerControlsProps {
  progress: number;
  size?: number | undefined;
  width?: number | undefined;
  isPaused: boolean;
  onPlayPause: () => void;
}

const VideoPlayerControls = ({
  progress,
  size = 48,
  width = 3,
  isPaused,
  onPlayPause,
}: VideoPlayerControlsProps) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="relative flex justify-center items-center">
      <svg
        className="opacity-50 transition group-active/item:opacity-100 group-hover:opacity-100"
        width={size}
        height={size}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#aaaaaa"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button
          className="group/item cursor-pointer flex justify-center items-center fill-white h-lg w-lg text-white opacity-50 active:opacity-100 group-hover:opacity-100 transition"
          onClick={onPlayPause}
        >
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
