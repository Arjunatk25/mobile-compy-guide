import { FileText, Download } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const Notes = () => {
  const units = [
    { number: 1, title: "Introduction to Mobile Computing", files: 3 },
    { number: 2, title: "Emerging Wireless Standards", files: 2 },
    { number: 3, title: "Mobile Networking", files: 4 },
    { number: 4, title: "Mobile Data Management", files: 3 },
    { number: 5, title: "Mobile Computing Models", files: 2 },
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
                    <span className="text-xs bg-secondary text-primary px-3 py-1 rounded-full font-medium">
                      {unit.files} files
                    </span>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    {Array.from({ length: unit.files }).map((_, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="w-full justify-between text-left"
                        disabled
                      >
                        <span className="text-sm">Lecture Notes {idx + 1}.pdf</span>
                        <Download className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Note: PDF upload functionality to be implemented
                  </p>
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
