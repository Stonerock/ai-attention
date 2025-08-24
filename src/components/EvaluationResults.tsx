import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MetricCard } from "./MetricCard";
import { ScoreCircle } from "./ScoreCircle";
import { StatusCheck } from "./StatusCheck";
import { IssueList } from "./IssueList";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Download, Calendar, FileText, Shield, Zap, Brain } from "lucide-react";

interface EvaluationResultsProps {
  data: {
    url: string;
    timestamp: string;
  };
}

export const EvaluationResults = ({ data }: EvaluationResultsProps) => {
  const performanceIssues = [
    { count: 74, description: "images missing alt text — AI sees nothing; users see… also nothing.", severity: 'high' as const },
    { count: 2, description: "empty links — mystery buttons.", severity: 'medium' as const },
    { count: 13, description: "inputs without labels — guess the field, win a prize.", severity: 'high' as const }
  ];

  const structuredDataTypes = [
    { type: "WebPage", status: true },
    { type: "ImageObject", status: true },
    { type: "BreadcrumbList", status: true },
    { type: "WebSite", status: true },
    { type: "Organization", status: true },
    { type: "FAQPage", status: false },
    { type: "HowTo", status: false },
    { type: "Product", status: false }
  ];

  const botAccess = [
    { name: "Googlebot", allowed: true },
    { name: "GPTBot", allowed: true },
    { name: "Perplexity", allowed: true },
    { name: "Claude", allowed: true },
    { name: "llms.txt", allowed: false }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      {/* Back to top anchor */}
      <div className="flex justify-center">
        <Button variant="ghost" onClick={scrollToTop} className="font-mono text-sm">
          <ArrowUp className="w-4 h-4 mr-2" />
          Back to Title
        </Button>
      </div>

      {/* Section 1: User Attention */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold">1. User Attention</h2>
          <p className="text-muted-foreground italic">If people leave, robots don't matter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="First Contentful Paint"
            value="1.9s"
            status="warning"
            caption="Figure 2a. First Contentful Paint (target < 1.8s)."
          />
          <MetricCard
            title="Total Load Time"
            value="2.7s"
            status="warning"
            caption="Figure 2b. Total load."
          />
          <MetricCard
            title="Accessibility Score"
            value={87}
            target="100"
            status="warning"
            caption="Figure 2c. axe-core summary."
          />
        </div>

        <IssueList issues={performanceIssues} title="Critical Issues" />
      </section>

      {/* Section 2: Google Attention */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold">2. Google Attention</h2>
          <p className="text-muted-foreground italic">Google isn't psychic. Tell it who you are.</p>
        </div>

        <Card className="metric-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <StatusCheck
                label="Canonical"
                status={true}
                description="No identity crisis here."
              />
              <StatusCheck
                label="Open Graph"
                status={true}
                description="Social previews won't look like garbage."
              />
              <StatusCheck
                label="Sitemap.xml"
                status={true}
                description="Google's treasure map is intact."
              />
              <StatusCheck
                label="RSS Feed"
                status={false}
                description="Retro, optional."
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 3: AI Attention */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold">3. AI Attention</h2>
          <p className="text-muted-foreground italic">Robots don't read between the lines. They barely read the lines.</p>
        </div>

        <Card className="metric-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">AI Surfaces Readiness</h3>
                <p className="text-sm text-muted-foreground">Grade C — Needs Attention</p>
              </div>
              <ScoreCircle score={73} size="lg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Answer Clarity</span>
                  <span className="font-mono text-sm font-bold">70</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Extractable Facts</span>
                  <span className="font-mono text-sm font-bold">70</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Citations</span>
                  <span className="font-mono text-sm font-bold status-success">100</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Content Recency</span>
                  <span className="font-mono text-sm font-bold status-error">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Structured Data Depth</span>
                  <span className="font-mono text-sm font-bold">75</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Technical (JS/robots)</span>
                  <span className="font-mono text-sm font-bold">65</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <figcaption>Sub-metric descriptions:</figcaption>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• answers exist, but they mumble</li>
                <li>• some facts, nothing to brag about</li>
                <li>• congrats, you're quote-worthy</li>
                <li>• time capsule vibes</li>
                <li>• AI snacks available, dessert missing</li>
                <li>• mostly crawlable; avoid heavy overlays</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium font-sans mb-4">Bot Access Summary</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {botAccess.map((bot) => (
                <Badge 
                  key={bot.name}
                  variant={bot.allowed ? "default" : "secondary"}
                  className={bot.allowed ? "bg-success text-success-foreground" : ""}
                >
                  {bot.name}: {bot.allowed ? "Allowed" : "Missing"}
                </Badge>
              ))}
            </div>
            <Button variant="outline" size="sm" className="font-mono">
              <FileText className="w-4 h-4 mr-2" />
              Generate llms.txt
            </Button>
            <figcaption className="mt-2">
              roll out the welcome mat for AI crawlers
            </figcaption>
          </CardContent>
        </Card>
      </section>

      {/* Section 4: Structured Attention */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold">4. Structured Attention</h2>
          <p className="text-muted-foreground italic">Schema & Knowledge Graph optimization</p>
        </div>

        <Card className="metric-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium font-sans mb-2">Detected JSON-LD scripts: 5</h3>
                <div className="flex flex-wrap gap-2">
                  {structuredDataTypes.slice(0, 5).map((item) => (
                    <Badge key={item.type} variant="default" className="bg-success text-success-foreground">
                      {item.type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium font-sans mb-2">Missing</h3>
                <div className="flex flex-wrap gap-2">
                  {structuredDataTypes.slice(5).map((item) => (
                    <Badge key={item.type} variant="secondary">
                      {item.type}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <figcaption className="mt-4">
              Figure 4. Recommended types for AI Overviews & snippets.
            </figcaption>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Conclusion */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold">5. Conclusion</h2>
          <p className="text-muted-foreground italic">Action Plan</p>
        </div>

        <Card className="metric-card">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium font-sans mb-4">Top 3 fixes:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="font-mono text-sm font-bold mt-0.5">1.</span>
                <span className="text-sm">Add alt text to 74 images — humans + bots finally know what they're seeing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-sm font-bold mt-0.5">2.</span>
                <span className="text-sm">Add FAQ schema — AI overviews love a tidy Q&A.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-sm font-bold mt-0.5">3.</span>
                <span className="text-sm">Create llms.txt — tell AI where the good stuff is.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Attention Playbook (PDF)
              </Button>
              <Button variant="outline" className="flex-1">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Strategy Call
              </Button>
            </div>
            
            <figcaption className="mt-2 text-center">
              no email required; open-source spirit
            </figcaption>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};