import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";
import unit5Icon from "@/assets/unit5-icon.jpg";

const Unit5 = () => {
  const topics = [
    {
      title: "Client-Server Computing Models",
      description: "Traditional and mobile client-server architectures. Thin vs thick clients, and adaptation for mobile environments."
    },
    {
      title: "Mobile Agent-Based Models",
      description: "Autonomous mobile agents, code mobility, and agent-based application development. Benefits and security considerations."
    },
    {
      title: "Java for Mobile Applications",
      description: "Java ME (Micro Edition), J2ME architecture, MIDlets, and cross-platform mobile development with Java."
    },
    {
      title: "BREW Platform",
      description: "Binary Runtime Environment for Wireless. BREW architecture, application development, and deployment on CDMA devices."
    },
    {
      title: "Mobile Development Tools and Frameworks",
      description: "Modern development environments including Android SDK, iOS development tools, cross-platform frameworks, and mobile UI design patterns."
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Unit V: Computing Models" 
        subtitle="Development Tools and Frameworks"
      />
      
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <Link 
          to="/syllabus"
          className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Syllabus
        </Link>

        <div className="mb-6 rounded-xl overflow-hidden shadow-card">
          <img src={unit5Icon} alt="Unit 5 - Mobile Computing Models" className="w-full h-48 object-cover" />
        </div>

        <div className="space-y-4">
          {topics.map((topic, index) => (
            <ContentCard key={index} title={topic.title} icon={Book}>
              <p className="whitespace-pre-line">{topic.description}</p>
            </ContentCard>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Unit5;
