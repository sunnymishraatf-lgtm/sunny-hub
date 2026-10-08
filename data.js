/* ============================================================
   SUNNY'S HUB — data file.
   To add something new later, just add an entry to the right list:
   - APPS:     { name, tagline, description, version, size,
                 icon (emoji), download (url), source (url),
                 featured: true/false }
   - PROJECTS: { name, description, tags: [], repo (url),
                 demo (url or null) }
   - LINKS:    { label, url, icon (emoji) }
   The site rebuilds itself from this file. No other edits needed.
   ============================================================ */

const HUB = {
  name: "Sunny Mishra",
  tagline: "CSE student · Android & AI builder",
  bio: "I build real things that ship the same day — native Android apps, " +
       "AI agents, and tools people actually use. Computer Science & " +
       "Engineering at ITER.",

  apps: [
    {
      name: "NEUTRON",
      tagline: "Your AI companion",
      description: "AI chat, autonomous agent, server terminal, music, friends, " +
        "admin notifications. Web app plus native Android shell.",
      version: "v13",
      size: "42 KB",
      icon: "⚛️",
      download: "https://github.com/sunnymishraatf-lgtm/My-Agent/releases/tag/v13",
      source: "https://github.com/sunnymishraatf-lgtm/My-Agent",
      featured: true,
    },
    {
      name: "PC Remote",
      tagline: "Control your PC from your phone",
      description: "Local-network PC remote control + file transfer. No cloud, " +
        "no install on the phone beyond the app — PIN auth, QR pairing, " +
        "touchpad, keyboard, file browser over Wi-Fi.",
      version: "v1.2.0",
      size: "817 KB",
      icon: "🖥️",
      download: "https://github.com/sunnymishraatf-lgtm/My-Agent/releases",
      source: "https://github.com/sunnymishraatf-lgtm/My-Agent",
      featured: true,
    },
    {
      name: "SignalFind",
      tagline: "Find your lost phone by SMS",
      description: "Offline SMS phone-finder: text your lost phone a PIN-coded " +
        "command and get its GPS location back by SMS. No internet needed. " +
        "Keystore-encrypted, rate-limited, dual-SIM aware.",
      version: "v1.0.1",
      size: "~5 MB",
      icon: "📡",
      download: "https://github.com/sunnymishraatf-lgtm/SignalFind/releases",
      source: "https://github.com/sunnymishraatf-lgtm/SignalFind",
      featured: true,
    },
    // --- add your next app here ---
  ],

  projects: [
    {
      name: "NEUTRON Web",
      description: "Full AI workspace in the browser: chat, agent, terminal, music, themes, friends.",
      tags: ["web", "ai", "typescript"],
      repo: "https://github.com/sunnymishraatf-lgtm/My-Agent",
      demo: "https://neutron-agent.vercel.app/app",
    },
    {
      name: "SignalFind",
      description: "Offline SMS phone finder for Android.",
      tags: ["android", "kotlin", "sms"],
      repo: "https://github.com/sunnymishraatf-lgtm/SignalFind",
      demo: null,
    },
    {
      name: "Aether Drop",
      description: "Secure file-sharing platform: large uploads, shareable links, QR codes, password protection, expiring links, P2P transfers, client-side encryption.",
      tags: ["web", "react", "node"],
      repo: "https://github.com/sunnymishraatf-lgtm/File-Share-20gb",
      demo: "https://file-share-20gb.vercel.app",
    },
    {
      name: "GrootSecure",
      description: "Hardened Linux Mint 22.2 Cinnamon — a complete, secure desktop OS.",
      tags: ["os", "linux", "security"],
      repo: "https://github.com/sunnymishraatf-lgtm/GrootSecure",
      demo: null,
    },
    {
      name: "LegacyCare",
      description: "Full-stack Next.js app for documenting funeral, cultural, religious, and personal ceremony preferences in advance.",
      tags: ["web", "nextjs"],
      repo: "https://github.com/sunnymishraatf-lgtm/LEGACYCARE",
      demo: "https://legacycare-henna.vercel.app/",
    },
    {
      name: "smart-code-hub",
      description: "Full-stack web app with AI code assistant, real-time collaboration dashboard, and secure file sharing.",
      tags: ["web", "ai"],
      repo: "https://github.com/sunnymishraatf-lgtm/smart-code-hub",
      demo: "https://smart-code-hub.vercel.app",
    },
    {
      name: "SunnyOS Tracker",
      description: "Learning & progress tracker for the SunnyOS operating-system development journey — a 360-day engineering roadmap.",
      tags: ["web", "osdev"],
      repo: "https://github.com/sunnymishraatf-lgtm/O-S",
      demo: "https://o-s-nine.vercel.app/",
    },
    {
      name: "Class-room",
      description: "Website for class-room.",
      tags: ["web"],
      repo: "https://github.com/sunnymishraatf-lgtm/Class-room",
      demo: null,
    },
    {
      name: "AQUA-WATCH",
      description: "Live web application.",
      tags: ["web"],
      repo: "https://github.com/sunnymishraatf-lgtm/AQUA-WATCH",
      demo: "https://aqua-watch-7kt7.vercel.app/",
    },
    {
      name: "Everyday-Tasks",
      description: "Live web application.",
      tags: ["web"],
      repo: "https://github.com/sunnymishraatf-lgtm/Everyday-Tasks",
      demo: "https://sunnymishraatf-lgtm.github.io/Everyday-Tasks/",
    },
    // --- add more projects here ---
    // { name: "...", description: "...", tags: ["..."], repo: "...", demo: "..." },
  ],

  links: [
    { label: "GitHub", url: "https://github.com/sunnymishraatf-lgtm", icon: "🐙" },
    { label: "LeetCode", url: "https://leetcode.com/u/devsunny-28/", icon: "🧠" },
    // { label: "Twitter/X", url: "https://x.com/...", icon: "𝕏" },
    // { label: "LinkedIn", url: "https://linkedin.com/in/...", icon: "💼" },
    // { label: "Email", url: "mailto:...", icon: "✉️" },
  ],

  footer: "Built by Sunny · Ships same-day since 2024",
};
