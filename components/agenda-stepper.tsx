"use client";
import { motion } from "framer-motion";

interface AgendaStepperProps {
  steps: number;
  activeStep: number;
  progress: number;
}

export default function AgendaStepper({
  steps,
  activeStep,
  progress,
}: AgendaStepperProps) {
  return (
    <div className="relative h-full w-8 flex flex-col items-center">
      {/* Background line (white) */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white left-1/2 transform -translate-x-1/2"></div>

      {/* Progress line (black) */}
      <motion.div
        className="absolute top-0 w-0.5 bg-black left-1/2 transform -translate-x-1/2 z-10"
        style={{
          height: `${progress * 100}%`,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Step dots */}
      {Array.from({ length: steps }).map((_, index) => {
        const stepProgress = (index + 1) / steps;
        const isActive = index === activeStep;
        const isPassed = progress >= stepProgress;

        return (
          <div
            key={index}
            className="absolute left-1/2 transform -translate-x-1/2 z-20"
            style={{
              top: `${stepProgress * 100 - 100 / steps / 2}%`,
            }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                isPassed
                  ? "bg-black border-black"
                  : isActive
                  ? "bg-white border-black"
                  : "bg-white border-white"
              }`}
              animate={{
                scale: isActive ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
