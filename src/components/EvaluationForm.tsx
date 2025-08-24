import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Zap, Globe } from "lucide-react";

interface EvaluationFormProps {
  onSubmit: (data: { url: string; type: string }) => void;
  isLoading?: boolean;
}

export const EvaluationForm = ({ onSubmit, isLoading }: EvaluationFormProps) => {
  const [url, setUrl] = useState("https://example.com");
  const [auditType, setAuditType] = useState("lighthouse");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ url, type: auditType });
  };

  return (
    <Card className="paper-meta">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="url" className="text-sm font-mono small-caps">
              Target URL
            </Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="font-mono text-sm"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="audit-type" className="text-sm font-mono small-caps">
              Audit Type
            </Label>
            <Select value={auditType} onValueChange={setAuditType} disabled={isLoading}>
              <SelectTrigger id="audit-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lighthouse">Lighthouse + AI Analysis</SelectItem>
                <SelectItem value="sitemap">Sitemap Batch Analysis</SelectItem>
                <SelectItem value="competitor">Competitor Comparison</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              type="submit" 
              className="flex-1 font-medium"
              disabled={isLoading}
              variant={auditType === "lighthouse" ? "default" : "secondary"}
            >
              <PlayCircle className="w-4 h-4 mr-2" />
              {auditType === "lighthouse" ? "Run Lighthouse" : "Get Report"}
              {auditType === "lighthouse" && " (slower)"}
            </Button>
            
            {auditType === "lighthouse" && (
              <Button 
                type="button"
                variant="outline"
                onClick={() => onSubmit({ url, type: "quick" })}
                disabled={isLoading}
                className="flex-1 sm:flex-initial"
              >
                <Zap className="w-4 h-4 mr-2" />
                Quick Scan
              </Button>
            )}
          </div>

          <figcaption className="text-center">
            Takes ~30s. Robots will not be harmed in the process.
          </figcaption>
        </form>
      </CardContent>
    </Card>
  );
};