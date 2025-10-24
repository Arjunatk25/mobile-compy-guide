import { FileText, Download, FolderOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const Notes = () => {
  const driveLink = "https://drive.google.com/drive/folders/1xyyF-_n4iY8GkSBKwoB23h8V8l_IHbIB?usp=sharing";

  const units = [
    { number: 1, title: "Introduction to Mobile Computing", pdf: "/notes/MC_UNIT_I_Notes.pdf" },
    { number: 2, title: "Emerging Wireless Network Standards", pdf: "/notes/MC_UNIT_II_Notes.pdf" },
    { number: 3, title: "Mobile Networking", pdf: "/notes/MC_UNIT_III_Notes.pdf" },
    { number: 4, title: "Mobile Data Management", pdf: "/notes/MC_UNIT_IV_Notes.pdf" },
    { number: 5, title: "Mobile Computing Models", pdf: "/notes/MC_UNIT_V_Notes.pdf" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Notes & PDFs" 
        subtitle="Study Materials by Unit"
      />

      <main className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
        {/* 🔗 Google Drive Folder Section */}
        <div className="bg-card rounded-xl p-5 shadow-card border border-border">
          <div className="flex items-center gap-4">
            <div className="bg-secondary p-3 rounded-lg">
              <FolderOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">📁 Complete Notes Folder</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Access all Mobile Computing notes and study PDFs in one place.
              </p>
              <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Open Google Drive Folder
              </a>
            </div>
          </div>
        </div>

        {/* 📚 Unit-wise Notes Section */}
        <div className="space-y-4">
          {units.map((unit) => (
            <div 
              key={unit.number} 
              className="bg-card rounded-xl p-5 shadow-card border border-border"
            >
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
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      Available
                    </span>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <a
                      href={unit.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full px-4 py-3 text-left border border-border rounded-lg hover:bg-secondary transition-colors"
                    >
                      <span className="text-sm font-medium">
                        Download {unit.title} Notes (PDF)
                      </span>
                      <Download className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs text-muted-foreground mt-3">
                    PDF includes detailed content from the course textbook
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
