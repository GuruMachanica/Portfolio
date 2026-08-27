let cachedData = null;

export const fetchPortfolioData = async () => {
  if (cachedData) return cachedData;
  try {
    const response = await fetch("/data/portfolioData.json");
    if (!response.ok) throw new Error("HTTP error " + response.status);
    const data = await response.json();
    cachedData = data;
    return data;
  } catch (err) {
    console.warn("AJAX fetch failed, using fallback data", err);
    return null;
  }
};
