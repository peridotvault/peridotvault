import React from "react";

type InitCallback = (engine: unknown) => void | Promise<void>;

export const initParticlesEngine = async (init?: InitCallback) => {
  if (init) {
    await init({});
  }
};

type ParticlesProps = {
  className?: string;
};

const Particles = (_props: ParticlesProps) => null;

export default Particles;
