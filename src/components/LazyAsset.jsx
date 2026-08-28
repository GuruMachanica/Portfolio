import React, { useState, useEffect, useRef } from "react";

/**
 * LazyAsset - High-performance AJAX & IntersectionObserver-powered progressive asset loader
 * Delays network fetching until element approaches viewport, displays skeleton placeholder,
 * and performs zero-jank progressive fade-in.
 */
export default function LazyAsset({
  src,
  alt = "asset",
  className = "",
  useAjaxBlob = false,
  fallback = null,
  onClick = null
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blobSrc, setBlobSrc] = useState(null);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "250px 0px", // Trigger pre-load 250px before entering viewport
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting || !src) return;

    let isMounted = true;

    if (useAjaxBlob && src.startsWith("http")) {
      // AJAX Network Fetch with Blob ObjectURL
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch asset");
          return res.blob();
        })
        .then((blob) => {
          if (isMounted) {
            const objectUrl = URL.createObjectURL(blob);
            setBlobSrc(objectUrl);
          }
        })
        .catch(() => {
          if (isMounted) {
            setBlobSrc(src); // Fallback to direct src
          }
        });
    } else {
      setBlobSrc(src);
    }

    return () => {
      isMounted = false;
      if (blobSrc && blobSrc.startsWith("blob:")) {
        URL.revokeObjectURL(blobSrc);
      }
    };
  }, [isIntersecting, src, useAjaxBlob]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`relative overflow-hidden bg-zinc-950/80 ${className}`}>
      
      {/* Skeleton Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-900/90 animate-pulse">
          <div className="w-5 h-5 border-2 border-white/15 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-900 text-zinc-500 font-mono text-xs p-4 text-center">
          <span>Failed to load asset</span>
          {fallback}
        </div>
      )}

      {/* Render Image once intersecting */}
      {isIntersecting && blobSrc && (
        <img
          src={blobSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-center transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
          }`}
        />
      )}
    </div>
  );
}
