import { useState } from "react";
import { EvaluationForm } from "@/components/EvaluationForm";
import { EvaluationResults } from "@/components/EvaluationResults";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [evaluationData, setEvaluationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEvaluation = async (data: { url: string; type: string }) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setEvaluationData({
        url: data.url,
        timestamp: new Date().toISOString(),
        type: data.type
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Lorem Ipsum
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground italic max-w-3xl mx-auto">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </p>
          
          <div className="text-sm text-muted-foreground small-caps">
            <span className="font-mono">Submitted by:</span> {"{your-agency-name}"} · 
            <span className="font-mono"> Methodology:</span> Lighthouse, axe-core, structured-data parsers, AI extractability heuristics.
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Mauris non dui mauris. Fusce egestas lacus eros, nec volutpat dolor molestie eget. 
              Aliquam erat volutpat. Donec feugiat mattis blandit. Sed volutpat turpis ut est dignissim gravida. 
              Curabitur dolor arcu, lobortis et facilisis ac, semper sit amet nisi. Integer non tempus odio.
            </p>
          </div>
        </header>

        <Separator className="my-12" />

        {/* Input Form */}
        <div className="mb-12">
          <h2 className="text-xl font-serif font-bold mb-6 text-center">Input "form" styled as a paper's meta section</h2>
          <div className="max-w-2xl mx-auto">
            <EvaluationForm onSubmit={handleEvaluation} isLoading={isLoading} />
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="font-mono text-sm">Analyzing website attention metrics...</span>
            </div>
          </div>
        )}

        {/* Results */}
        {evaluationData && !isLoading && (
          <>
            <Separator className="my-12" />
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-serif font-bold">Website Attention Analysis</h2>
                <div className="text-sm font-mono text-muted-foreground small-caps">
                  URL: {evaluationData.url} · Generated: {new Date(evaluationData.timestamp).toLocaleDateString()}
                </div>
              </div>
              <EvaluationResults data={evaluationData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
