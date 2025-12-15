import React from "react";

export default function Hero() {
  return (
    <section className="h-screen relative w-full">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-center h-full px-12">
        <h1 className="text-center text-5xl max-w-3xl">
          The Next-Gen
          <span className="text-accent">
            {" "}
            Intelligent Decentralized Gaming{" "}
          </span>
          Ecosystem
        </h1>
      </div>
    </section>
  );
}
