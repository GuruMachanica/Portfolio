import React, { useState } from "react";

export default function LiveProjectThumbnail({
  name,
  fallbackImage,
  demoUrl,
  category = "SYSTEM"
}) {
  const [isLiveLoaded, setIsLiveLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // High-performance real-time screenshot endpoint
  const liveScreenshotUrl = demoUrl && !demoUrl.includes("github.com")
    ? `https://s0.wp.com/mshots/v1/${encodeURIComponent(demoUrl)}?w=1200`
    : null;

  return (
    <div className="relative h-56 sm:h-64 w-full bg-zinc-950 overflow-hidden border-b border-white/10 group-hover:border-white/20 transition-colors">
      {/* Base Fallback Image (Instant Zero-Latency Render) */}
      <img
        src={fallbackImage}
        alt={name}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
          isLiveLoaded ? "opacity-0 absolute inset-0" : "opacity-90 group-hover:opacity-100"
        }`}
      />

      {/* Live Screenshot Overlay Layer */}
      {liveScreenshotUrl && !hasError && (
        <img
          src={liveScreenshotUrl}
          alt={`${name} Live Deployment Preview`}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLiveLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ${
            isLiveLoaded ? "opacity-95 group-hover:opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Subtle Gradient Shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Status Badges */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {isLiveLoaded && (
          <span className="inline-flex items-center gap-1.5 text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE SHOT
          </span>
        )}
        <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/20 font-bold uppercase">
          {category}
        </span>
      </div>
    </div>
  );
}
