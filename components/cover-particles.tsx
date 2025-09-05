"use client";

import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          fpsLimit: 60,
          background: { color: { value: "#0b0b0b" } }, // fondo oscuro para contraste
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
            },
          },
          particles: {
            color: { value: ["#ff6b00", "#ffcc00", "#ff3300"] }, // tonos de fuego
            number: {
              value: 100,
              density: {
                enable: true,
                width: 800,  // 👈 reemplazo de "area"
                height: 800,
              },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1.5, max: 5 },
              animation: {
                enable: true,
                speed: 2,
                startValue: "random",
                mode: "auto",
                decay: 0.05,
              },
            },
            opacity: {
              value: { min: 0.25, max: 0.9 },
              animation: {
                enable: true,
                speed: 1.2,
                startValue: "random",
                mode: "auto",
                decay: 0.04,
              },
            },
            move: {
              enable: true,
              direction: "top", // efecto fuego
              speed: { min: 0.4, max: 2 },
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};
