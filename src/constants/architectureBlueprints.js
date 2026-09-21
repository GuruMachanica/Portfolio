export const architectureBlueprints = {
  "AnveshakSutra": {
    category: "Zero-Knowledge Breach OSINT & 3D Graph ML",
    math: "H(c) = SHA-256(c)[0:5]  ⟹  k ≥ 50 (Bucket k-Anonymity Pool)",
    pipeline: "Input Identity -> SHA-256 5-Char Prefix -> K-Anonymity Pool -> 3D WebGL Graph ML -> Canary Tripwire",
    coreStack: "FastAPI • PyTorch Geometric • Celery • Three.js WebGL • Redis",
    keyHighlights: [
      "Zero-Knowledge K-Anonymity protocol querying breach pools with 0% server identity leakage",
      "Interactive 3D WebGL Graph ML blast-radius engine computing Betweenness Centrality",
      "Asynchronous Celery sweepers with canary deception tripwires and synthetic telemetry"
    ],
    latency: "< 120ms Query Latency",
    security: "Zero Cleartext Server Ingestion",
    siteKey: "anveshaksutra",
    repo: "https://github.com/GuruMachanica/AnveshakSutra",
    demo: "https://anveshak-sutra.vercel.app/"
  },
  "Concept3D": {
    category: "AI Concept-to-3D Spatial Generator",
    math: "ℒ_spatial = ‖z_3D - ℰ_text(u)‖²₂ + λ · ℛ_mesh",
    pipeline: "Text / Image Input -> Semantic Tokenizer -> ChromaDB Vector Store -> PyTorch Latent Mesh -> WebGL 3D Canvas",
    coreStack: "Python • PyTorch • ChromaDB • Three.js • FastAPI",
    keyHighlights: [
      "Translates unstructured conceptual sketches and prompts into structured 3D spatial representations",
      "Semantic preprocessing pipeline with ChromaDB vector memory and embedding similarity",
      "Real-time WebGL mesh rendering and client-side viewport manipulation"
    ],
    latency: "< 2.4s Generation Time",
    security: "Input Sanitization & Schema Validation",
    siteKey: "concept3d",
    repo: "https://github.com/GuruMachanica/Concept-3D",
    demo: "https://concept-3d.vercel.app/"
  },
  "VaakKavach": {
    category: "Autonomous Edge AI Acoustic Defense & Deepfake Shield",
    math: "P(Clone | X) = σ(w_j(1 - Ĵ) + w_h(1 - Ĥ) + w_b(1 - B̂) + w_k K̂ - θ) ≥ 0.65",
    pipeline: "44.1kHz PCM Stream -> Lock-Free Ring Buffer -> Native Kotlin FFT/Jitter DSP -> Bayesian Threat Engine -> Haptic/SMS Shield",
    coreStack: "Flutter • Kotlin Native DSP • FFT Spectral Analysis • SQLite • Riverpod",
    keyHighlights: [
      "Sub-15ms on-device frame evaluation isolating neural vocoder phase jitter and spectral clamping",
      "100% offline sovereign privacy with zero external telemetry, cloud APIs, or authentication barriers",
      "Autonomous agentic watchdog auto-recovering audio pipelines and logging SHA-256 evidence"
    ],
    latency: "< 15ms Real-Time Edge Inference",
    security: "100% Sovereign Local Sandboxed Execution (Zero Cloud Telemetry)",
    siteKey: "vaakkavach",
    repo: "https://github.com/GuruMachanica/VaakKavach",
    demo: "https://vaakkavach.netlify.app/"
  },
  "ArkaSutra": {
    category: "3D Spatial Solar & Autonomous Rooftop Agent",
    math: "I_tilt = I_dir · cos(θ) + I_diff · Y_Perez + I_refl",
    pipeline: "OSM 3D / CityGML LOD2 -> Perez Physics -> Autonomous AI Agent -> 60 FPS Three.js Twin",
    coreStack: "Three.js WebGL • Autonomous Agent AI • CityGML LOD2 • Perez Physics • FastAPI",
    keyHighlights: [
      "Autonomous solar AI agent controlling 3D scene, tilt pitch, and shadow mitigation",
      "Perez clear-sky transposition benchmarked against NREL PVLib across 8,760 annual vectors",
      "Zero-upload OSM 3D city streaming with live Copernicus/ERA5 satellite telemetry assimilation"
    ],
    latency: "60 FPS GPU-Accelerated Raycasting",
    security: "Client-Side Sandboxed WebGL Engine",
    siteKey: "arkasutra",
    repo: "https://github.com/GuruMachanica/ArkaSutra",
    demo: "https://arkasutra.netlify.app/"
  },
  "SunMap": {
    category: "3D Spatial Solar & Autonomous Rooftop Agent",
    math: "I_tilt = I_dir · cos(θ) + I_diff · Y_Perez + I_refl",
    pipeline: "OSM 3D / CityGML LOD2 -> Perez Physics -> Autonomous AI Agent -> 60 FPS Three.js Twin",
    coreStack: "Three.js WebGL • Autonomous Agent AI • CityGML LOD2 • Perez Physics • FastAPI",
    keyHighlights: [
      "Autonomous solar AI agent controlling 3D scene, tilt pitch, and shadow mitigation",
      "Perez clear-sky transposition benchmarked against NREL PVLib across 8,760 annual vectors",
      "Zero-upload OSM 3D city streaming with live Copernicus/ERA5 satellite telemetry assimilation"
    ],
    latency: "60 FPS GPU-Accelerated Raycasting",
    security: "Client-Side Sandboxed WebGL Engine",
    siteKey: "sunmap",
    repo: "https://github.com/GuruMachanica/ArkaSutra",
    demo: "https://arkasutra.netlify.app/"
  },
  "KavachG": {
    category: "Industrial Edge Safety CV Command Center",
    math: "IoU(box_p, box_g) ≥ 0.50  ⟹  mAP₅₀ = 98.4%",
    pipeline: "RTSP Video Stream -> OpenCV Buffer -> YOLOv8 Detection -> 17-Point Pose -> Three.js Plant Digital Twin",
    coreStack: "YOLOv8 • OpenCV • FastAPI • Three.js • MongoDB",
    keyHighlights: [
      "Real-time automated safety compliance monitoring achieving 98.4% mAP50 precision",
      "17-point human pose estimation detecting slips, falls, and unauthorized perimeter incursions",
      "Synchronized Three.js industrial plant digital twin mapping camera alerts to spatial 3D coordinates"
    ],
    latency: "< 95ms Inference Per Frame",
    security: "Role-Based Token Authentication",
    siteKey: "kavachg",
    repo: "https://github.com/GuruMachanica/KavachG",
    demo: "https://kavach-g.vercel.app/"
  }
};
