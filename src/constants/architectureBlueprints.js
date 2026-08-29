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
  "A.E.G.I.S": {
    category: "Real-Time Audio Edge Scam Defense",
    math: "𝒮_fraud = w₁ · 𝒮_AASIST + w₂ · 𝒮_NLP  ≥  θ_alert",
    pipeline: "Audio Stream -> WebRTC VAD -> AASIST Voice Model -> Sarvam Multilingual STT -> Guardian SOS Alert",
    coreStack: "FastAPI • WebSockets • AASIST • Sarvam AI STT • WebRTC",
    keyHighlights: [
      "Sub-second (< 280ms) real-time audio pipeline detecting synthetic voice deepfakes and scam patterns",
      "Sarvam AI multilingual Speech-to-Text supporting 7+ Indic languages in real time",
      "Hybrid risk scoring engine with automated WebSocket Guardian SOS dispatch"
    ],
    latency: "< 280ms Sub-Second Inference",
    security: "End-to-End Encrypted WebSocket Stream",
    siteKey: "aegis",
    repo: "https://github.com/GuruMachanica/A.E.G.I.S.",
    demo: "https://aegis-anti-scam.netlify.app/"
  },
  "SunMap": {
    category: "3D Spatial Solar Irradiance & Yield Engine",
    math: "I_tilt = I_dir · cos(θ) + I_diff · Y_Perez + I_refl",
    pipeline: "CityGML LOD2 Meshes -> Normal Vector Parser -> Perez Transposition Physics -> 8,760h Raycast Shadow Engine",
    coreStack: "Three.js WebGL • CityGML LOD2 • Perez Model • Python • Docker",
    keyHighlights: [
      "60 FPS WebGL spatial simulation parsing CityGML LOD2 building geometries and normal vectors",
      "Perez clear-sky transposition physics benchmarked against NREL PVLib across 8,760 annual vectors",
      "Automated rooftop segmentation, shadow occlusion analysis, and carbon abatement calculations"
    ],
    latency: "60 FPS GPU-Accelerated Raycasting",
    security: "Client-Side Sandboxed WebGL Engine",
    siteKey: "sunmap",
    repo: "https://github.com/GuruMachanica/SunMap",
    demo: "https://sunmapsolar.netlify.app/"
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
