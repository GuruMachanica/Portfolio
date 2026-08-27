import React from "react";
import { motion } from "framer-motion";

const SkeletonLoader = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 max-w-7xl mx-auto min-h-[70vh] flex flex-col justify-center">
      <div className="animate-pulse space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="h-9 w-36 bg-white/10 rounded-xl" />
          <div className="h-5 w-48 bg-white/10 rounded-lg" />
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-28 bg-white/10 rounded" />
          <div className="h-10 w-72 bg-white/15 rounded-xl" />
          <div className="h-4 w-full max-w-2xl bg-white/5 rounded" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-3xl bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10" />
                <div className="h-6 w-3/4 bg-white/15 rounded-lg" />
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-5/6 bg-white/5 rounded" />
              </div>
              <div className="h-4 w-1/3 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
