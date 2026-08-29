import { COMMANDS, HUZAIFA_ASCII } from "../../constants/cliCommands";

export const executeCliCommand = (cmdStr, { navigate, setIsOpen, triggerReverseWordErase }) => {
  const trimmed = cmdStr.trim().toLowerCase();
  if (!trimmed) return null;

  if (trimmed === "clear" || trimmed === "cls") {
    triggerReverseWordErase();
    return { isClear: true };
  }

  const userEntry = { id: Date.now(), type: "user", text: `huzaifa@monolith:~$ ${cmdStr}`, isStreaming: false };
  let responseEntry = null;

  switch (trimmed) {
    case "help":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: Object.entries(COMMANDS).map(([cmd, desc]) => `  ${cmd.padEnd(18)} - ${desc}`).join("\n"),
        isStreaming: true
      };
      break;

    case "huzaifa":
    case "noirfetch":
    case "neofetch":
    case "sysinfo":
      responseEntry = {
        id: Date.now() + 1,
        type: "sys",
        text: HUZAIFA_ASCII,
        isStreaming: true
      };
      break;

    case "whoami":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `Name: Mohammad Huzaifa\nRole: Agentic AI Engineer & Scalable Backend Architect\nEducation: B.Tech Computer Science & Engineering (2023 - 2027)\nSpecialization: Multi-Agent Swarms, Zero-Knowledge Privacy, Distributed Systems\nGitHub: https://github.com/GuruMachanica\nLinkedIn: https://linkedin.com/in/mohammad--huzaifa/`,
        isStreaming: true
      };
      break;

    case "github":
    case "gh":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[GITHUB] https://github.com/GuruMachanica\nOpening verified GitHub profile in new tab...`,
        isStreaming: true
      };
      setTimeout(() => window.open("https://github.com/GuruMachanica", "_blank"), 500);
      break;

    case "linkedin":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[LINKEDIN] https://linkedin.com/in/mohammad--huzaifa/\nOpening verified LinkedIn profile in new tab...`,
        isStreaming: true
      };
      setTimeout(() => window.open("https://linkedin.com/in/mohammad--huzaifa/", "_blank"), 500);
      break;

    case "socials":
    case "social":
    case "links":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[VERIFIED PROFESSIONAL CHANNELS]\n- GitHub:    https://github.com/GuruMachanica\n- LinkedIn:  https://linkedin.com/in/mohammad--huzaifa/\n- Email:     mailto:mdhuzaifa00786@gmail.com`,
        isStreaming: true
      };
      break;

    case "email":
    case "mail":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[EMAIL] Initiating direct transmission to mdhuzaifa00786@gmail.com...`,
        isStreaming: true
      };
      setTimeout(() => {
        window.location.href = "mailto:mdhuzaifa00786@gmail.com?subject=Engineering%20Inquiry%20-%20Mohammad%20Huzaifa";
      }, 500);
      break;

    case "certifications":
    case "certs":
    case "research":
    case "paper":
    case "publications":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[ACADEMIC & PEER-REVIEWED CREDENTIALS]\n- IJDDT Research Paper: DOI 10.25258/ijddt.16.43s.31 (PPF Protein Homology Detection)\n- Harvard University: CS50 AI (Introduction to AI with Python, Jul 2026)\n- GeeksforGeeks: Python Programming Self-Paced (Jul 2025)\nRouting to /certifications interactive dossier viewer...`,
        isStreaming: true
      };
      setTimeout(() => {
        navigate("/certifications");
        setIsOpen(false);
      }, 1100);
      break;

    case "experience":
    case "internship":
    case "sanfy":
    case "orvanto":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[INDUSTRY EXPERIENCE]\n- Role: Backend Developer Intern (Hybrid, India)\n- Company: Sanfy Consultancy Services Pvt. Ltd. (Orvanto AI)\n- Period: May 2026 - Jul 2026\n- Focus: Asynchronous FastAPI microservices, ML pipelines, MongoDB/MySQL query optimization\nRouting to /experience...`,
        isStreaming: true
      };
      setTimeout(() => {
        navigate("/experience");
        setIsOpen(false);
      }, 1100);
      break;

    case "resume":
    case "cv":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[RESUME] Routing to /resume master 1-page PDF dossier...`,
        isStreaming: true
      };
      setTimeout(() => {
        navigate("/resume");
        setIsOpen(false);
      }, 1000);
      break;

    case "projects":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[FLAGSHIP PRODUCTION PLATFORMS]\n1. AnveshakSutra  -> Zero-Knowledge OSINT & 3D Graph ML (https://anveshak-sutra.vercel.app/)\n2. Concept-3D     -> Prompt-to-3D Spatial Latent Generator (https://concept-3d.vercel.app/)\n3. A.E.G.I.S.     -> Real-Time Audio Edge Scam Defense (https://aegis-anti-scam.netlify.app/)\n4. SunMap         -> 3D Spatial Solar Irradiance Engine (https://sunmapsolar.netlify.app/)\n5. KavachG        -> Autonomous Edge Industrial Safety CV by Team CodeGambit (https://kavach-g.vercel.app/)\nRouting to /projects...`,
        isStreaming: true
      };
      setTimeout(() => {
        navigate("/projects");
        setIsOpen(false);
      }, 1200);
      break;

    case "anveshaksutra":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[SYSTEM] AnveshakSutra — Zero-Knowledge Breach OSINT & 3D Graph ML\n- Stack: K-Anonymity (k=50), PyTorch Geometric, Three.js WebGL, Celery\n- Live Preview: https://anveshak-sutra.vercel.app/\n- Repo: https://github.com/GuruMachanica/AnveshakSutra`,
        isStreaming: true
      };
      break;

    case "kavachg":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[SYSTEM] KavachG — Autonomous Edge Industrial Safety CV (Team CodeGambit)\n- Stack: YOLOv8 (98.4% mAP50), 17-Point Pose, Three.js Plant Digital Twin\n- Live Preview: https://kavach-g.vercel.app/\n- Repo: https://github.com/GuruMachanica/KavachG`,
        isStreaming: true
      };
      break;

    case "concept3d":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[SYSTEM] Concept-3D — Prompt-to-3D Spatial Latent Generator\n- Stack: PyTorch, Generative 3D, ChromaDB Vector Memory, Three.js\n- Live Preview: https://concept-3d.vercel.app/\n- Repo: https://github.com/GuruMachanica/Concept-3D`,
        isStreaming: true
      };
      break;

    case "aegis":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[SYSTEM] A.E.G.I.S. — Real-Time Audio Edge Scam Defense\n- Stack: FastAPI, AASIST Deepfake Audio, WebSockets, Sarvam STT\n- Live Preview: https://aegis-anti-scam.netlify.app/\n- Repo: https://github.com/GuruMachanica/A.E.G.I.S.`,
        isStreaming: true
      };
      break;

    case "sunmap":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[SYSTEM] SunMap — 3D Spatial Solar Irradiance Engine\n- Stack: Three.js, CityGML LOD2, Perez Transposition, PyTorch\n- Live Preview: https://sunmapsolar.netlify.app/\n- Repo: https://github.com/GuruMachanica/SunMap`,
        isStreaming: true
      };
      break;

    case "exit":
    case "quit":
      setIsOpen(false);
      return { isExit: true };

    default:
      responseEntry = {
        id: Date.now() + 1,
        type: "err",
        text: `command not found: "${trimmed}". Type 'help' to inspect available system commands.`,
        isStreaming: true
      };
      break;
  }

  return { userEntry, responseEntry };
};
