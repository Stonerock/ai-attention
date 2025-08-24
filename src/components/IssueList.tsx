import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Issue {
  count: number;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

interface IssueListProps {
  issues: Issue[];
  title?: string;
}

export const IssueList = ({ issues, title = "Issues Found" }: IssueListProps) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      case 'low': return 'text-chart-neutral';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="metric-card">
      <CardContent className="p-6">
        <h3 className="text-sm font-medium font-sans mb-4">{title}</h3>
        <div className="space-y-3">
          {issues.map((issue, index) => (
            <div key={index} className="flex items-start gap-3">
              <AlertTriangle className={`w-4 h-4 mt-0.5 ${getSeverityColor(issue.severity)}`} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm">{issue.count}</span>
                  <span className="text-sm">{issue.description}</span>
                </div>
                <figcaption className="mt-1">
                  {issue.severity} priority issue
                </figcaption>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};