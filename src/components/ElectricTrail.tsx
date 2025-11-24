import { useEffect, useState, useRef, useMemo } from "react";
import type { ElectricTrailProps, TrailPoint } from "../types/electricTrail";

export const ElectricTrail = ({
  color = "#00BFFF",
  trailLength = 30,
  intensity = 50,
  enabled = true,
  minDistance = 30,
  maxDistance = 50,
}: ElectricTrailProps) => {
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const svgRef = useRef<SVGSVGElement>(null);
  const filterIdRef = useRef(
    `electric-trail-filter-${Math.random().toString(36).substr(2, 9)}`
  );

  useEffect(() => {
    if (!enabled) {
      setTrailPoints([]);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setTrailPoints((prev) => {
        if (prev.length === 0) {
          return [newPoint];
        }

        const last = prev[0];
        const distance = Math.sqrt(
          Math.pow(newPoint.x - last.x, 2) + Math.pow(newPoint.y - last.y, 2)
        );

        // Skip if too close to last point
        if (distance < minDistance) {
          return prev;
        }

        // If points are too far apart, add intermediate points for smoothness
        if (distance > maxDistance) {
          const steps = Math.ceil(distance / maxDistance);
          const intermediatePoints: TrailPoint[] = [];

          for (let i = 1; i < steps; i++) {
            const t = i / steps;
            intermediatePoints.push({
              x: last.x + (newPoint.x - last.x) * t,
              y: last.y + (newPoint.y - last.y) * t,
              timestamp: Date.now() - (steps - i) * 5, // Slight timestamp offset
            });
          }

          return [newPoint, ...intermediatePoints, ...prev].slice(
            0,
            trailLength
          );
        }

        return [newPoint, ...prev].slice(0, trailLength);
      });
    };

    // Cleanup old points
    const cleanupInterval = setInterval(() => {
      setTrailPoints((prev) => {
        const now = Date.now();
        return prev.filter((point) => now - point.timestamp < 500);
      });
    }, 100);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanupInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled, trailLength, minDistance, maxDistance]);

  // Create smooth path using quadratic bezier curves
  const createSmoothPath = (points: TrailPoint[]): string => {
    if (points.length < 2) return "";

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      if (i === 1) {
        // First segment - use line
        path += ` L ${curr.x} ${curr.y}`;
      } else {
        // Use quadratic bezier for smooth curves
        const controlX = prev.x;
        const controlY = prev.y;
        const endX = (prev.x + curr.x) / 2;
        const endY = (prev.y + curr.y) / 2;

        path += ` Q ${controlX} ${controlY} ${endX} ${endY}`;

        // If not last point, also add line to current
        if (i < points.length - 1) {
          path += ` L ${curr.x} ${curr.y}`;
        }
      }
    }

    return path;
  };

  const smoothPath = useMemo(
    () => (trailPoints.length >= 2 ? createSmoothPath(trailPoints) : ""),
    [trailPoints]
  );

  const filterId = filterIdRef.current;

  if (!enabled || trailPoints.length < 2) {
    return null;
  }

  return (
    <div className="fixed pointer-events-none top-0 left-0 w-full h-full z-50">
      <svg
        ref={svgRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="1"
            >
              <animate
                attributeName="seed"
                values="1;5;2;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="1"
            >
              <animate
                attributeName="seed"
                values="1;3;6;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise3"
              seed="2"
            >
              <animate
                attributeName="seed"
                values="2;4;1;2"
                dur="3s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise4"
              seed="2"
            >
              <animate
                attributeName="seed"
                values="2;6;3;2"
                dur="3s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend
              in="part1"
              in2="part2"
              mode="color-dodge"
              result="combinedNoise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale={intensity}
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>

          <radialGradient id={`${filterId}-glow`} cx="50%" cy="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="50%" stopColor={color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>

          {/* Background glow gradient for ambient effect */}
          <linearGradient
            id={`${filterId}-bg-glow`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main trail path with smooth curves */}
        {trailPoints.length >= 2 && (
          <g filter={`url(#${filterId})`}>
            {/* Main electric trail - reduced opacity to prevent visible line on overlap */}
            <path
              d={smoothPath}
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              style={{
                filter: "blur(0.5px)",
              }}
            />

            {/* Glow layer 1 - matches reference */}
            <path
              d={smoothPath}
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
              style={{
                filter: "blur(2px)",
              }}
            />

            {/* Glow layer 2 - matches reference */}
            <path
              d={smoothPath}
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
              style={{
                filter: "blur(4px)",
              }}
            />
          </g>
        )}

        {/* Background glow for ambient effect - matches reference */}
        {trailPoints.length >= 2 && (
          <path
            d={smoothPath}
            fill="none"
            stroke={`url(#${filterId}-bg-glow)`}
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
            style={{
              filter: "blur(32px)",
              transform: "scale(1.1)",
            }}
          />
        )}

        {/* Subtle glow points - only at the head of the trail */}
        {trailPoints.slice(0, 2).map((point, index) => {
          const opacity = (1 - index / 2) * 0.3;
          const size = 2 + (1 - index / 2) * 1;

          return (
            <circle
              key={`${point.timestamp}-${index}`}
              cx={point.x}
              cy={point.y}
              r={size}
              fill={`url(#${filterId}-glow)`}
              opacity={opacity}
              style={{
                filter: "blur(2px)",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};
