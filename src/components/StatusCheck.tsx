import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCheckProps {
  label: string;
  status: boolean;
  description?: string;
  className?: string;
}

export const StatusCheck = ({ label, status, description, className }: StatusCheckProps) => {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className={cn(
        "flex items-center justify-center w-5 h-5 rounded-full mt-0.5",
        status ? "bg-success text-success-foreground" : "bg-error text-error-foreground"
      )}>
        {status ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm">{label}</div>
        {description && (
          <figcaption className="mt-1">
            {description}
          </figcaption>
        )}
      </div>
    </div>
  );
};