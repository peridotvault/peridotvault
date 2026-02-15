"use client";

import React, { useEffect, useRef } from "react";
import {
  faCheck,
  faChevronLeft,
  faChevronRight,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import roadmapData from "../../assets/roadmap.json";
import FaultyTerminal from "../../shared/components/atoms/FaultyTerminal";
import SpotlightCard from "../../shared/components/atoms/SpotlightCard";

type RoadmapItem = {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending" | string;
  date?: string;
  featuresCount: number;
};

type RoadmapSectionType = {
  title: string;
  description: string;
  items: RoadmapItem[];
};

type RoadmapData = {
  sections: RoadmapSectionType[];
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

function RoadmapHeroSection() {
  return (
    <section className="w-full h-[50dvh] relative p-4 ">
      <div className="h-full w-full bg-background_secondary relative rounded-2xl overflow-hidden">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#4D8A6A"
          className={"opacity-30"}
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>
      <div className="absolute w-full h-full top-0 left-0 p-8 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1200px] h-full flex flex-col gap-4 max-md:gap-3 justify-center items-start text-start max-md:text-center">
          <h1 className="text-7xl font-bold max-md:text-4xl max-md:w-full">
            Roadmap
          </h1>
          <p className="text-2xl w-2/3 max-md:text-xl max-md:w-full">
            We have successfully developed the platform architecture and laid
            the groundwork for AI integration, setting the stage for a robust
            and innovative gaming experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function RoadmapTimelineSection({ section }: { section: RoadmapSectionType }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full flex flex-col gap-14 max-md:gap-8 items-center">
      <div className="max-w-[1200px] w-full">
        <div className="flex flex-col gap-8 px-8 max-md:gap-4">
          <h2 className="text-4xl font-bold max-md:text-3xl">{section.title}</h2>
          <p className="w-2/3 max-w-[800px] text-xl max-md:text-base max-md:w-full">
            {section.description}
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background_secondary p-3 rounded-full shadow-md hover:bg-background_primary"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
        </button>

        <div
          ref={scrollRef}
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="flex gap-8 max-md:gap-6 w-max">
              {section.items.map((item, idx) => (
                <SpotlightCard
                  key={`${item.title}-${idx}`}
                  className={`flex-shrink-0 custom-spotlight-card p-8 max-md:p-6 rounded-xl aspect-video w-[450px] max-md:w-[300px] flex flex-col justify-between ${
                    item.status === "completed" ? "bg-accent_secondary/10" : ""
                  }`}
                >
                  <div className="flex justify-between relative">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold max-md:text-xl line-clamp-2">
                        {item.title}
                      </h3>
                      {item.status === "completed" && item.date && (
                        <p className="max-md:text-sm">
                          <span className={"text-success capitalize"}>
                            {item.status}
                          </span>{" "}
                          {formatDate(item.date)}
                        </p>
                      )}
                    </div>
                    <div>
                      <div
                        className={`w-[50px] max-md:w-[40px] duration-300 rounded-full aspect-square flex items-center justify-center text-3xl max-md:text-xl text-background_primary ${
                          item.status === "completed"
                            ? "border border-success bg-accent_secondary"
                            : "bg-warning"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={item.status === "completed" ? faCheck : faCircleNotch}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end gap-12">
                    <p className="text-lg max-md:text-sm line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex flex-col items-end">
                      <span className="text-8xl max-md:text-5xl ">{item.featuresCount}</span>
                      <span className="max-md:text-sm">Features</span>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background_secondary p-3 rounded-full shadow-md hover:bg-background_primary"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
        </button>
      </div>
    </section>
  );
}

function RoadmapContentSections() {
  const data = roadmapData as RoadmapData;

  return (
    <div className="w-full flex justify-center py-24 max-md:py-10 gap-10 max-md:gap-8">
      <div className="w-full flex flex-col gap-24">
        {data.sections.map((section, idx) => (
          <RoadmapTimelineSection key={`${section.title}-${idx}`} section={section} />
        ))}
      </div>
    </div>
  );
}

export default function RoadmapRoutePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <RoadmapHeroSection />
      <RoadmapContentSections />
    </div>
  );
}
