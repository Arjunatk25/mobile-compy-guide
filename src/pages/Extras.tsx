import { Lightbulb, BookOpen, Library, Globe } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";

const Extras = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Additional Resources" 
        subtitle="Beyond the Syllabus"
      />
      
      <main className="max-w-screen-xl mx-auto px-4 py-6 space-y-4">
        <ContentCard title="Content Beyond Syllabus" icon={Lightbulb}>
          <ul className="space-y-2 list-disc list-inside">
            <li>5G and Beyond: Emerging wireless technologies and future trends</li>
            <li>Edge Computing in Mobile Networks: Distributed computing at network edge</li>
            <li>Quantum Communication: Future of secure mobile communications</li>
            <li>Blockchain in Mobile Systems: Decentralized mobile applications</li>
            <li>AI/ML in Mobile Computing: Intelligent mobile applications and optimization</li>
            <li>Green Computing: Energy-efficient mobile technologies</li>
          </ul>
        </ContentCard>

        <ContentCard title="Textbooks" icon={BookOpen}>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-foreground">Primary Textbook:</p>
              <p className="text-sm">
                "Mobile Computing" by Asoke K. Talukder and Roopa R. Yavagal<br />
                McGraw Hill Education, 2nd Edition
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">Recommended Reading:</p>
              <p className="text-sm">
                "Principles of Mobile Computing" by Uwe Hansmann et al.<br />
                Springer, 3rd Edition
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Reference Books" icon={Library}>
          <ul className="space-y-2 text-sm">
            <li>• "Mobile and Wireless Networks" by William Stallings</li>
            <li>• "Wireless Communications and Networking" by Vijay K. Garg</li>
            <li>• "Mobile Computing: Technology, Applications, and Service Creation" by Pattabiraman</li>
            <li>• "Android Programming: The Big Nerd Ranch Guide" by Bill Phillips</li>
            <li>• "iOS Programming: The Big Nerd Ranch Guide" by Christian Keur</li>
          </ul>
        </ContentCard>

        <ContentCard title="Useful Websites" icon={Globe}>
          <div className="space-y-2 text-sm">
            <a href="#" className="block text-primary hover:text-accent transition-colors">
              • IEEE Mobile Computing - Latest research and publications
            </a>
            <a href="#" className="block text-primary hover:text-accent transition-colors">
              • ACM MobiCom - Mobile computing conference proceedings
            </a>
            <a href="#" className="block text-primary hover:text-accent transition-colors">
              • Android Developers - Official Android development resources
            </a>
            <a href="#" className="block text-primary hover:text-accent transition-colors">
              • Apple Developer - iOS development documentation
            </a>
            <a href="#" className="block text-primary hover:text-accent transition-colors">
              • MDN Web Docs - Mobile web development standards
            </a>
            <p className="text-muted-foreground italic mt-3">
              Note: Links will be activated with actual URLs
            </p>
          </div>
        </ContentCard>
      </main>

      <BottomNav />
    </div>
  );
};

export default Extras;
