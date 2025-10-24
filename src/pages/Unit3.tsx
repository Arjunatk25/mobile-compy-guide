import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";

const Unit3 = () => {
  const topics = [
    {
      title: "Mobile IP Protocols",
      description: "Mobile IPv4 and IPv6 architectures. Home agents, foreign agents, tunneling mechanisms, and seamless mobility support."
    },
    {
      title: "General Packet Radio Service (GPRS)",
      description: "Packet-switched cellular technology. GPRS architecture, protocols, and integration with GSM networks."
    },
    {
      title: "Transmission Control Protocol (TCP)",
      description: "TCP behavior in wireless networks. Challenges with traditional TCP in mobile environments and optimization techniques."
    },
    {
      title: "Mobile Transport Layer",
      description: "Indirect TCP, Snooping TCP, and Mobile TCP. Transport layer protocols optimized for wireless and mobile networks."
    },
    {
      title: "Wireless Application Protocol (WAP)",
      description: "Protocol stack for mobile internet access. WAP architecture, WML, and mobile web browsing standards."
    },
    {
      title: "Security in Mobile Networks",
      description: "Authentication, encryption, and security protocols. Threats in mobile environments and countermeasures including VPN and secure channels."
    },
    {
      title: "Network Layer Protocols",
      description: "Routing in mobile networks. Dynamic routing protocols, location management, and handoff optimization."
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Unit III: Mobile Networking" 
        subtitle="Protocols and Security"
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

export default Unit3;
