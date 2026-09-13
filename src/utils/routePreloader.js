const routesMap = {
  "/overview": () => import("../pages/OverviewPage"),
  "/about": () => import("../pages/OverviewPage"),
  "/technologies": () => import("../pages/TechnologiesPage"),
  "/projects": () => import("../pages/ProjectsPage"),
  "/experience": () => import("../pages/ExperiencePage"),
  "/education": () => import("../pages/EducationPage"),
  "/certifications": () => import("../pages/CertificationsPage"),
  "/achievements": () => import("../pages/AchievementsPage"),
  "/contact": () => import("../pages/ContactPage"),
  "/resume": () => import("../pages/ResumePage"),
};

/**
 * Preload a single route chunk on intent (hover / touch on nav or hub cards).
 * Replaces the old prefetch-everything-on-idle strategy — the Three.js-heavy
 * Technologies chunk (~448 kB) is now only fetched when the user shows intent.
 */
export const preloadRoute = (path) => {
  const importer = routesMap[path];
  if (importer) {
    try {
      importer();
    } catch (e) {
      /* noop: non-critical preload failure */
    }
  }
};