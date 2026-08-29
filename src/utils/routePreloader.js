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

export const preloadRoute = (path) => {
  if (routesMap[path]) {
    try {
      routesMap[path]();
    } catch (e) {}
  }
};

export const preloadAllRoutes = () => {
  Object.values(routesMap).forEach((importer) => {
    try {
      importer();
    } catch (e) {}
  });
};