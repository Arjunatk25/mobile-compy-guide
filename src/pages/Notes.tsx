import { FileText, Download } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const Notes = () => {
  const units = [
    { number: 1, title: "Introduction to Mobile Computing", hasNotes: true },
    { number: 2, title: "Emerging Wireless Network Standards", hasNotes: true },
    { number: 3, title: "Mobile Networking", hasNotes: false },
    { number: 4, title: "Mobile Data Management", hasNotes: false },
    { number: 5, title: "Mobile Computing Models", hasNotes: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Notes & PDFs" 
        subtitle="Study Materials by Unit"
      />
      
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {units.map((unit) => (
            <div key={unit.number} className="bg-card rounded-xl p-5 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">Unit {unit.number}</h3>
                      <p className="text-sm text-muted-foreground">{unit.title}</p>
                    </div>
                    {unit.hasNotes && (
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        Available
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    {unit.hasNotes ? (
                      <a
                        href="/notes/MC_UNIT_I-5_Notes.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 py-3 text-left border border-border rounded-lg hover:bg-secondary transition-colors"
                      >
                        <span className="text-sm font-medium">Complete Course Notes (Units 1-2)</span>
                        <Download className="w-4 h-4" />
                      </a>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full justify-between text-left opacity-50"
                        disabled
                      >
                        <span className="text-sm">Notes coming soon</span>
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  {unit.hasNotes && unit.number <= 2 && (
                    <p className="text-xs text-muted-foreground mt-3">
                      PDF includes detailed content from the course textbook
                    </p>
                  )}
                  {!unit.hasNotes && (
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      Additional notes for this unit will be added soon
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Notes;
