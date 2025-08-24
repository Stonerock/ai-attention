import { cn } from "@/lib/utils";

interface ScoreCircleProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ScoreCircle = ({ score, maxScore = 100, size = 'md', className }: ScoreCircleProps) => {
  const percentage = (score / maxScore) * 100;
  const radius = size === 'sm' ? 20 : size === 'md' ? 30 : 40;
  const strokeWidth = size === 'sm' ? 3 : size === 'md' ? 4 : 5;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-error";
  };

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20", 
    lg: "w-28 h-28"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", sizeClasses[size], className)}>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="hsl(var(--border))"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={cn("transition-all duration-1000", getScoreColor(score))}
        />
      </svg>
      <div className={cn("absolute inset-0 flex items-center justify-center font-mono font-bold", textSizes[size], getScoreColor(score))}>
        {score}
      </div>
    </div>
  );
};