import React from "react";
import LazyAsset from "./LazyAsset";

export default function LiveProjectThumbnail({
  name,
  fallbackImage,
  demoUrl,
  category = "SYSTEM"
}) {
  return (
    <div className="relative h-56 sm:h-64 w-full bg-zinc-950 overflow-hidden border-b border-white/10 group-hover:border-white/20 transition-colors">
      {/* AJAX Lazy Loaded High-Resolution Project Artwork */}
      <LazyAsset
        src={fallbackImage}
        alt={name}
        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
      />

      {/* Cinematic Gradient Shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Status Badges */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {demoUrl && !demoUrl.includes("github.com") && (
          <span className="inline-flex items-center gap-1.5 text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE PREVIEW
          </span>
        )}
        <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/20 font-bold uppercase">
          {category}
        </span>
      </div>
    </div>
  );
}
