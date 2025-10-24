import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";
import unit4Icon from "@/assets/unit4-icon.jpg";

const Unit4 = () => {
  const topics = [
    {
      title: "Mobile Database Systems",
      description: "Architecture of mobile databases. Client-server models, data replication, and synchronization in disconnected environments."
    },
    {
      title: "Transaction Processing Models",
      description: "ACID properties in mobile context. Two-phase commit, optimistic concurrency control, and transaction management with intermittent connectivity."
    },
    {
      title: "Caching and Hoarding Techniques",
      description: "Data caching strategies for mobile devices. Pre-fetching, hoarding policies, and cache consistency maintenance."
    },
    {
      title: "Data Dissemination Models",
      description: "Push vs pull models. Broadcast disks, selective tuning, and energy-efficient data access patterns."
    },
    {
      title: "Mobile Database Recovery",
      description: "Failure recovery in mobile environments. Logging, checkpointing, and restoration of database consistency after disconnections."
    },
    {
      title: "Query Processing in Mobile Databases",
      description: "Location-dependent queries, continuous queries, and optimization techniques for resource-constrained mobile devices."
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Unit IV: Data Management" 
        subtitle="Mobile Database Systems"
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
          <img src={unit4Icon} alt="Unit 4 - Mobile Data Management" className="w-full h-48 object-cover" />
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

export default Unit4;
