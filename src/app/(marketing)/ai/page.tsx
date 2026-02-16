"use client";

import { useEffect } from "react";
import Link from "next/link";
import AnimatedContent from "../../../shared/components/animations/AnimatedContent";
import GlassComponent from "../../../shared/components/atoms/GlassComponent";
import GradientBlinds from "../../../shared/components/atoms/GradientBlinds";
import { ContainerGlass } from "../../../shared/components/molecules/ContainerGlass";
import { Button } from "@/shared/components/molecules/Button";

export default function AiRoutePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-lg">
      <AiHeroSection />
      <AiAboutSection />
      <AiCompanionSection />
      <PersonalizedRecommendationsSection />
      <GameNightPlannerSection />
    </div>
  );
}

function AiHeroSection() {
  return (
    <section className="w-full h-[80dvh] p-4">
      <div className="bg-surface w-full h-full rounded-2xl overflow-hidden relative">
        <div className="absolute h-full z-10 flex flex-col gap-10 items-center justify-center w-full pointer-events-none p-8 text-center">
          <h1 className="text-6xl font-bold max-md:text-3xl">
            Smarter Play, Powered by AI
          </h1>
          <div className="flex gap-6">
            <Link href="/peri" className="pointer-events-auto">
              <Button>Try PERI AI</Button>
            </Link>
            <Link href="/ai/#gaming_with_ai" className="pointer-events-auto">
              <GlassComponent className="flex justify-center items-center py-3 px-6 rounded-lg duration-300 hover:bg-surface hover:text-white overflow-hidden text-label">
                <p>Learn More</p>
              </GlassComponent>
            </Link>
          </div>
        </div>

        <GradientBlinds
          gradientColors={["#90EE90", "#4D8A6A"]}
          angle={20}
          noise={0.5}
          blindCount={20}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
    </section>
  );
}

function AiAboutSection() {
  return (
    <section
      id="gaming_with_ai"
      className="py-24 max-md:py-10 flex items-center w-full max-w-(--container-max-width) px-8 gap-8 max-md:flex-col"
    >
      <div className="w-full max-md:aspect-video overflow-hidden rounded-3xl aspect-4/3">
        <img
          src="/assets/views/ai/recommendation.gif"
          draggable={false}
          className="bg-surface w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col gap-4  max-md:gap-2">
        <h2 className="text-xl bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent max-md:text-lg">
          Reimagining Gaming with AI
        </h2>
        <p className="text-3xl max-md:text-2xl">
          Our AI is not just a feature - it is the heart of PeridotVault.
          Discover games that fit your style, connect with an intelligent
          assistant, and enjoy a safe community.
        </p>
      </div>
    </section>
  );
}

function AiCompanionSection() {
  const features = [
    {
      title: "Real-time Tactical Support",
      description:
        "Get instant strategic tips while you play, tailored to your current in-game situation",
    },
    {
      title: "Learns and Adapts Your Playstyle",
      description:
        "Receive intelligent prompts based on what is happening in your game right when you need them.",
    },
    {
      title: "Context-aware Suggestions",
      description:
        "The more you play, the smarter it gets. Evolving to fit your unique gaming habits.",
    },
  ];

  return (
    <AnimatedContent>
      <section className="max-w-(--container-max-width) px-8 max-md:px-4 py-24 max-md:py-10 w-full">
        <div className="w-full p-16 max-md:p-8 flex flex-col gap-16  max-md:gap-8 rounded-2xl border border-border">
          <div className="flex max-md:flex-col items-center justify-between gap-16 max-md:gap-8">
            <div className="w-1/2 max-md:w-full flex flex-col gap-6 max-md:gap-4">
              <div className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent flex flex-col gap-2">
                <span className="uppercase text-base max-md:text-sm">
                  ARTIFICIAL INTELLIGENCE
                </span>
                <h2 className="text-4xl font-bold max-md:text-3xl">
                  AI Companion: Your In-Game Teammate
                </h2>
              </div>
              <p className="max-md:text-base">
                The AI Companion in Peridot offers real-time support, actionable
                strategies, and interactive feedback tailored to your gameplay.
                Whether you are exploring new missions, facing boss fights, or
                managing resources, your AI assistant is always a step ahead -
                ready to guide, suggest, and react based on in-game context.
              </p>
            </div>
            <div className="w-1/2 rounded-2xl overflow-hidden aspect-video max-md:w-full max-md:aspect-video">
              <img
                src="/assets/views/landing/ai.gif"
                draggable={false}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
            {features.map((item) => (
              <GlassComponent
                key={item.title}
                className="aspect-4/3 max-md:aspect-video border rounded-2xl flex flex-col gap-8 py-8 max-md:py-6 max-md:gap-6 bg-white/5 backdrop-blur-md border-border hover:bg-primary duration-300"
              >
                <h3 className="text-3xl px-8 font-bold max-md:text-2xl">
                  {item.title}
                </h3>
                <p className="px-8 max-md:text-base">{item.description}</p>
              </GlassComponent>
            ))}
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}

function PersonalizedRecommendationsSection() {
  const highlights = [
    {
      title: "Custom-tailored Game Suggestions",
      description:
        "Discover games picked specifically for you, based on your interests and play history",
    },
    {
      title: "Continuous Learning Interactions",
      description:
        "The system improves over time by understanding how you browse, play, and engage",
    },
  ];

  return (
    <AnimatedContent>
      <section className="max-w-(--container-max-width) px-8 py-24 w-full flex flex-col items-center gap-8 max-md:gap-6 max-md:py-10">
        <h2 className="text-center text-5xl bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent font-bold max-md:text-3xl max-md:text-start">
          Personalized Recommendations
        </h2>
        <p className="text-center max-w-5xl max-md:text-start max-md:text-base">
          Peridot&apos;s AI analyzes your play history, genre preferences,
          behavior patterns, and community trends to recommend games you are
          most likely to enjoy. It is more than a store algorithm - it is a
          personal curator for your gaming taste.
        </p>

        <div className="w-full grid grid-cols-5 max-lg:grid-cols-2 gap-8">
          <div className="col-span-3 max-lg:col-span-2 relative max-lg:aspect-video overflow-hidden rounded-2xl">
            <img
              src="/assets/views/ai/gaming.webp"
              alt=""
              className="w-full h-full absolute top-0 left-0 object-cover"
              draggable={false}
            />
            <h3 className="absolute bottom-0 left-0 p-12 max-md:p-8 text-3xl max-md:text-2xl">
              Enjoy personalized suggestions across both traditional and
              blockchain-based games
            </h3>
          </div>
          <div className="col-span-2 grid max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="aspect-4/3 max-md:aspect-video border rounded-2xl flex flex-col gap-8 py-8 bg-white/5 backdrop-blur-md border-border hover:bg-primary duration-300 max-md:py-6 max-md:gap-6"
              >
                <h3 className="text-xl px-8 max-md:text-lg">{item.title}</h3>
                <hr className="border-t border-border " />
                <p className="px-8 text-3xl max-md:text-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}

function GameNightPlannerSection() {
  const features = [
    {
      title: "Intelligent Scheduling",
      description:
        "Automatically plans sessions by matching players' schedules for the perfect game time",
    },
    {
      title: "Game Suggestions",
      description:
        "Recommends games everyone will enjoy, based on shared interests and past activity",
    },
    {
      title: "Smart Reminders",
      description:
        "Sends timely notifications to keep everyone in sync before and after game night.",
    },
  ];

  return (
    <AnimatedContent>
      <section className="max-w-(--container-max-width) px-8 py-24 max-md:py-10 w-full flex flex-col gap-12 max-md:gap-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <h2 className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent text-5xl max-md:text-3xl font-bold">
            Game Night Planner
          </h2>
          <p className="max-md:text-base">
            Planning a game night has never been easier. Let our AI handle time
            zones, player availability, game compatibility, and even suggest fun
            formats for your next session.
          </p>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6">
          {features.map((item) => (
            <ContainerGlass
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </AnimatedContent>
  );
}
