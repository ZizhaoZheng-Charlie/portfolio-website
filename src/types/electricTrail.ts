export interface ElectricTrailProps {
  color?: string;
  trailLength?: number;
  intensity?: number;
  enabled?: boolean;
  minDistance?: number;
  maxDistance?: number;
}

export interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}
