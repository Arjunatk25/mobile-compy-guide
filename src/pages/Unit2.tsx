import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";

const Unit2 = () => {
  const topics = [
    {
      title: "Third Generation (3G) Wireless Networks",
      description: "UMTS, CDMA2000, and evolution of 3G standards. High-speed data transmission, multimedia support, and global roaming capabilities."
    },
    {
      title: "Fourth Generation (4G) and Beyond",
      description: "LTE, WiMAX, and the path to 5G. Enhanced mobile broadband, ultra-reliable low latency, and massive machine-type communications."
    },
    {
      title: "Middleware for Wireless Networks",
      description: "Software layer between applications and network infrastructure. Service discovery, adaptation, and quality of service management."
    },
    {
      title: "Mobile Ad Hoc Networks (MANET)",
      description: "Self-configuring infrastructure-less networks. Routing protocols, topology management, and applications in disaster recovery and military operations."
    },
    {
      title: "Wireless Sensor Networks",
      description: "Distributed sensor systems for monitoring physical conditions. Energy efficiency, data aggregation, and IoT integration."
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Unit II: Wireless Standards" 
        subtitle="Emerging Technologies and Networks"
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

export default Unit2;
