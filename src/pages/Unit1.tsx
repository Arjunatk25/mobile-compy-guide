import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";

const Unit1 = () => {
  const topics = [
    {
      title: "Wireless and Mobile Computing Architecture",
      description: "Overview of mobile computing systems, components, and architectural patterns. Understanding the fundamental building blocks of mobile systems."
    },
    {
      title: "Limitations of Mobile Computing",
      description: "Technical constraints including battery life, processing power, network bandwidth, screen size, and security challenges in mobile environments."
    },
    {
      title: "Mobile Internet Access",
      description: "Technologies and protocols enabling internet connectivity on mobile devices. Coverage of cellular data, WiFi, and emerging access technologies."
    },
    {
      title: "Wireless LAN Technology",
      description: "802.11 standards, WiFi protocols, infrastructure vs ad-hoc modes, and wireless LAN security mechanisms."
    },
    {
      title: "Mobile Computing Applications",
      description: "Categories of mobile applications including communication, location-based services, mobile commerce, and enterprise applications."
    },
    {
      title: "Mobile Computing vs Wireless Networking",
      description: "Key differences between mobile computing paradigm and traditional wireless networking. Mobility management and handoff mechanisms."
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Unit I: Introduction" 
        subtitle="Fundamentals of Mobile Computing"
      />
      
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <Link 
          to="/syllabus"
          className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Syllabus
        </Link>

        <div className="space-y-4">
          {topics.map((topic, index) => (
            <ContentCard key={index} title={topic.title} icon={Book}>
              <p>{topic.description}</p>
            </ContentCard>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Unit1;
