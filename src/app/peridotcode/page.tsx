"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiStar,
  FiTerminal,
  FiCopy,
  FiCheck,
  FiBox,
  FiCode,
  FiZap,
  FiGrid,
  FiMonitor,
  FiServer,
  FiDownload,
  FiCpu,
} from "react-icons/fi";
import Image from "next/image";

// Brand Colors (used sparingly - max 10%)
// --brand-1: #349b65 (main)
// --brand-2: #349b6650 (transparent)
// --brand-3: #87ee83 (light accent)

// ASCII Art for PeridotCode - PERIDOT
const ASCII_LOGO = `
██████╗ ███████╗██████╗ ██╗██████╗  ██████╗ ████████╗
██╔══██╗██╔════╝██╔══██╗██║██╔══██╗██╔═══██╗╚══██╔══╝
██████╔╝█████╗  ██████╔╝██║██║  ██║██║   ██║   ██║   
██╔═══╝ ██╔══╝  ██╔══██╗██║██║  ██║██║   ██║   ██║   
██║     ███████╗██║  ██║██║██████╔╝╚██████╔╝   ██║   
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝╚═════╝  ╚═════╝    ╚═╝   
`;

// Matrix rain characters
const MATRIX_CHARS = "01PERIDOTCODEVAULTGAMEDEVAI";

// GitHub stars fetcher component
function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/peridotvault/peridotcode",
          {
            headers: { Accept: "application/vnd.github.v3+json" },
          },
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch {
        // Error handled silently
      }
    };

    fetchStars();
    const interval = setInterval(fetchStars, 60000);
    return () => clearInterval(interval);
  }, []);

  const displayStars = stars !== null ? stars.toLocaleString() : "0";

  return (
    <a
      href="https://github.com/peridotvault/peridotcode"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 group"
    >
      <FiGithub className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        GitHub
      </span>
      <span className="flex items-center gap-1 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        <FiStar className="w-3.5 h-3.5" />
        {displayStars}
      </span>
    </a>
  );
}

// Installation command component
function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"curl" | "npm" | "bun" | "pnpm">(
    "curl",
  );

  const commands = {
    curl: "curl -fsSL https://peridotvault.github.io/peridotcode/install | bash",
    npm: "npm install -g peridotcode",
    bun: "bun install -g peridotcode",
    pnpm: "pnpm install -g peridotcode",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tab selector */}
      <div className="flex items-center gap-1 mb-3 p-1 bg-neutral-100 dark:bg-neutral-900 w-fit">
        {(["curl", "npm", "bun", "pnpm"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Command box */}
      <div className="relative group">
        <div className="relative flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
          <code className="text-sm sm:text-base font-mono text-neutral-700 dark:text-neutral-300 overflow-x-auto">
            <span style={{ color: "var(--brand-3, #87ee83)" }}>$</span>{" "}
            {commands[activeTab]}
          </code>
          <button
            onClick={handleCopy}
            className="ml-4 p-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors duration-200"
            aria-label="Copy command"
          >
            {copied ? (
              <FiCheck className="w-4 h-4 text-neutral-600" />
            ) : (
              <FiCopy className="w-4 h-4 text-neutral-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Interactive Matrix Rain Component
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#525252";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text =
          MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * 20;
        const y = drops[i] * 20;

        ctx.globalAlpha = Math.random() * 0.5 + 0.5;
        ctx.fillText(text, x, y);
        ctx.globalAlpha = 1;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-20 pointer-events-none"
    />
  );
}

// Typing effect component for ASCII art
function TypingAscii({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < lines.length) {
          setDisplayedLines((prev) => [...prev, lines[currentLine]]);
          currentLine++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="font-mono text-neutral-500 text-[10px] sm:text-xs md:text-sm lg:text-base leading-none whitespace-pre overflow-hidden">
      {displayedLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {line}
        </motion.div>
      ))}
      {displayedLines.length < lines.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-3 h-5 ml-1"
          style={{ backgroundColor: "var(--brand-3, #87ee83)" }}
        />
      )}
    </div>
  );
}

// Glitch text effect component
function GlitchText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute top-0 left-0 -z-10 text-red-500 opacity-70 animate-pulse"
        style={{ clipPath: "inset(0 0 50% 0)", transform: "translateX(2px)" }}
      >
        {children}
      </span>
      <span
        className="absolute top-0 left-0 -z-10 text-blue-500 opacity-70 animate-pulse"
        style={{ clipPath: "inset(50% 0 0 0)", transform: "translateX(-2px)" }}
      >
        {children}
      </span>
    </div>
  );
}

// Feature card component
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
    >
      <div className="relative">
        <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors duration-300">
          <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// FAQ item component
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-base font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
          {question}
        </span>
        <span
          className={`ml-4 text-xl text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-all duration-300 ${
            isOpen ? "rotate-45 text-neutral-900 dark:text-white" : ""
          }`}
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function PeridotCodePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    {
      icon: FiBox,
      title: "Game Engine Support",
      description:
        "Native support for Unity, Unreal Engine, Godot, and custom game engines with context-aware suggestions.",
    },
    {
      icon: FiCode,
      title: "Script Generation",
      description:
        "Generate game scripts, AI behaviors, physics logic, and gameplay systems in C#, C++, GDScript, and more.",
    },
    {
      icon: FiZap,
      title: "Shader Assistant",
      description:
        "Create and optimize shaders with AI-powered suggestions for HLSL, GLSL, and ShaderLab.",
    },
    {
      icon: FiGrid,
      title: "Level Design Tools",
      description:
        "Generate level layouts, procedural content, and world-building code with intelligent recommendations.",
    },
    {
      icon: FiMonitor,
      title: "Debug & Optimize",
      description:
        "Identify performance bottlenecks, optimize rendering, and fix bugs with AI-assisted debugging.",
    },
    {
      icon: FiServer,
      title: "Multiplayer Ready",
      description:
        "Build networking code, server architecture, and multiplayer systems with specialized game dev patterns.",
    },
  ];

  const faqs = [
    {
      question: "What is PeridotCode?",
      answer:
        "PeridotCode is an open-source AI-powered coding assistant specifically designed for game development. It understands game engine patterns, helps generate gameplay code, shaders, and provides intelligent suggestions tailored to game development workflows.",
    },
    {
      question: "What game engines are supported?",
      answer:
        "PeridotCode supports all major game engines including Unity, Unreal Engine, Godot, and custom engines. It understands engine-specific APIs and patterns to provide contextually relevant code suggestions.",
    },
    {
      question: "How do I install PeridotCode?",
      answer:
        "Installation is simple! Just run the curl command provided above, or install via npm/bun/pnpm. The setup wizard will guide you through configuration for your specific game engine and get you coding in minutes.",
    },
    {
      question: "Is PeridotCode free to use?",
      answer:
        "Yes! PeridotCode is completely free and open source. You can use it for indie games, commercial projects, or anything in between without any licensing fees.",
    },
    {
      question: "Can it help with shaders and graphics?",
      answer:
        "Absolutely! PeridotCode can generate and optimize shaders in HLSL, GLSL, and ShaderLab. It understands graphics programming concepts and can help with rendering pipelines, post-processing effects, and more.",
    },
    {
      question: "How does it understand my game project?",
      answer:
        "PeridotCode analyzes your project structure, understands your codebase context, and learns your game's architecture. This allows it to provide highly relevant suggestions for gameplay systems, AI behaviors, and more.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 py-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800">
            <a href="/peridotcode#hero" className="flex items-center">
              <Image
                src="/logo/peridotcode-horizontal_logo.png"
                alt="PeridotCode"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </a>

            <div className="hidden md:flex items-center gap-1">
              {["Features", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 font-mono"
                >
                  {item}
                </a>
              ))}
            </div>

            <GitHubStars />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Full Page */}
      <section
        id="hero"
        className="relative min-h-dvh flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0 overflow-hidden"
      >
        <MatrixRain />

        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#737373 1px, transparent 1px), linear-gradient(90deg, #737373 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: isClient
              ? `translate(${(mousePos.x - windowSize.width / 2) / 50}px, ${(mousePos.y - windowSize.height / 2) / 50}px)`
              : "translate(0px, 0px)",
            transition: "transform 0.3s ease-out",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - ASCII Art & Title */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden sm:block"
              >
                <TypingAscii text={ASCII_LOGO} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="sm:hidden flex justify-center"
              >
                <Image
                  src="/logo/peridotcode-mark_logo_withbackground.png"
                  alt="PeridotCode"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mx-auto lg:mx-0"
              >
                <motion.span
                  className="w-2 h-2"
                  style={{ backgroundColor: "var(--brand-1, #349b65)" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 font-mono">
                  SYSTEM_STATUS: ONLINE
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight"
              >
                AI-Powered
                <br />
                Game Development
                <br />
                Assistant
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-mono px-4 sm:px-0"
              >
                &gt; Generate game logic, scripts, shaders, and more with the
                power of AI
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/peridotvault/peridotcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 text-white font-medium transition-colors font-mono"
                  style={{ backgroundColor: "var(--brand-1, #349b65)" }}
                >
                  <FiDownload className="w-4 h-4" />
                  ./install.sh
                </a>
                <a
                  href="#features"
                  className="flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors font-mono"
                >
                  <FiTerminal className="w-4 h-4" />
                  cat features.md
                </a>
              </motion.div>
            </div>

            {/* Right Side - Terminal Window - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative hidden lg:block"
            >
              <div className="bg-neutral-900 border border-neutral-700 shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border-b border-neutral-700">
                  <div className="w-3 h-3 bg-red-500" />
                  <div className="w-3 h-3 bg-yellow-500" />
                  <div className="w-3 h-3 bg-green-500" />
                  <div className="ml-4 flex items-center gap-2">
                    <Image
                      src="/logo/peridotcode-mark_logo_nobg.png"
                      alt="PeridotCode"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-xs text-neutral-400 font-mono">
                      peridotcode — bash — 80x24
                    </span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <TerminalContent />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border border-neutral-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 border border-neutral-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Fixed at bottom of viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-xs text-neutral-500 font-mono">
            SCROLL_DOWN
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border border-neutral-400 flex items-start justify-center p-2 bg-neutral-50/50 dark:bg-[#0a0a0a]/50"
          >
            <motion.div
              className="w-1 h-2"
              style={{ backgroundColor: "var(--brand-1, #349b65)" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-6">
              <FiTerminal className="w-4 h-4 text-neutral-500" />
              <span className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                $ ls features/
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight font-mono">
              Built for Game Developers
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto font-mono">
              PeridotCode understands the unique challenges of game development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-6">
              <span className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                $ man peridotcode
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight font-mono">
              FAQ
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-mono">
              Everything you need to know
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 overflow-hidden px-6"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 sm:p-12 bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-center overflow-hidden"
          >
            {/* Background ASCII Pattern */}
            <div className="absolute inset-0 opacity-5 font-mono text-xs leading-none overflow-hidden pointer-events-none select-none">
              {Array(20).fill("PERIDOTCODE ").join("")}
            </div>

            <div className="relative">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
                style={{ backgroundColor: "var(--brand-2, #349b6650)" }}
              >
                <FiCpu
                  className="w-4 h-4"
                  style={{ color: "var(--brand-1, #349b65)" }}
                />
                <span
                  className="text-sm font-mono"
                  style={{ color: "var(--brand-1, #349b65)" }}
                >
                  READY_TO_DEPLOY
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight font-mono">
                Ready to build your next game?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto font-mono">
                Install PeridotCode in seconds and level up your game
                development.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://github.com/peridotvault/peridotcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors font-mono"
                >
                  <FiGithub className="w-4 h-4" />
                  git clone
                </a>
                <a
                  href="https://github.com/peridotvault/peridotcode#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors font-mono"
                >
                  <FiTerminal className="w-4 h-4" />
                  README.md
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/peridotcode-mark_logo_nobg.png"
                alt="PeridotCode"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-neutral-900 dark:text-white font-medium text-sm font-mono">
                PeridotCode
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/peridotvault/peridotcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>

            <p className="text-neutral-500 text-sm font-mono">
              <span style={{ color: "var(--brand-1, #349b65)" }}>&gt;</span> ©
              2026 PeridotVault
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Terminal content data - defined outside component to avoid closure issues
const TERMINAL_LINES = [
  { text: "$ peridotcode init", color: "text-neutral-300" },
  { text: "Initializing PeridotCode...", color: "text-neutral-500" },
  {
    text: "✓ Detecting game engine: Unity 2022.3 LTS",
    color: "text-neutral-400",
  },
  { text: "✓ Loading AI models...", color: "text-neutral-400" },
  { text: "✓ Connecting to PeridotVault...", color: "text-neutral-400" },
  { text: "", color: "text-neutral-500" },
  { text: "Ready! Try these commands:", color: "text-neutral-300" },
  { text: "  • 'generate player controller'", color: "text-neutral-400" },
  { text: "  • 'fix null reference exception'", color: "text-neutral-400" },
  { text: "  • 'optimize shader performance'", color: "text-neutral-400" },
  { text: "", color: "text-neutral-500" },
  { text: "$ _", color: "text-[#87ee83]" },
];

// Terminal typing animation component
function TerminalContent() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) return;

    const timeout = setTimeout(() => {
      setLines((prev) => [...prev, TERMINAL_LINES[currentLineIndex].text]);
      setCurrentLineIndex((prev) => prev + 1);
    }, 150);

    return () => clearTimeout(timeout);
  }, [currentLineIndex]);

  return (
    <div className="space-y-1">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${TERMINAL_LINES[i]?.color || "text-neutral-400"}`}
        >
          {line}
        </motion.div>
      ))}
      {lines.length === TERMINAL_LINES.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 ml-1"
          style={{ backgroundColor: "var(--brand-3, #87ee83)" }}
        />
      )}
    </div>
  );
}
