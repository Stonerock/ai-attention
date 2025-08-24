import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  target?: string;
  status?: 'success' | 'warning' | 'error';
  caption?: string;
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  target, 
  status = 'success', 
  caption, 
  className 
}: MetricCardProps) => {
  return (
    <Card className={cn("metric-card", className)}>
      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-sans">{title}</h3>
          <div className={cn(
            "score-display",
            status === 'success' && "status-success",
            status === 'warning' && "status-warning",
            status === 'error' && "status-error"
          )}>
            {value}{target && <span className="text-muted-foreground text-base ml-1">/ {target}</span>}
          </div>
          {caption && (
            <figcaption className="mt-2">
              {caption}
            </figcaption>
          )}
        </div>
      </CardContent>
    </Card>
  );
};