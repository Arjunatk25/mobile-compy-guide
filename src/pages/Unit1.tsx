import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";
import unit1Icon from "@/assets/unit1-icon.jpg";

const Unit1 = () => {
  const topics = [
    {
      title: "Introduction to Mobile Computing",
      description: "Mobile computing involves mobile communication, mobile hardware, and mobile software. It encompasses human-computer interaction where computers are transported during normal usage. Buzzwords like ubiquitous, nomadic, and pervasive computing define this emerging field. Understanding the difference between nomadic computing (limited indoor mobility) and mobile computing (outdoor mobility with handoff capabilities) is crucial."
    },
    {
      title: "Wireless and Mobile Computing Architecture",
      description: "The architectural model consists of stationary and mobile components. Fixed hosts connect via high-speed networks (Mbps to Gbps). Base stations (BS) or Mobile Support Stations (MSS) act as access points between mobile computers and fixed networks. Mobile computers can be within cell coverage, out of range, or crossing cell boundaries. Systems like GSM exemplify this architecture with features like roaming and minimal disruption during handoffs."
    },
    {
      title: "Limitations of Mobile Computing",
      description: "Mobile computing faces significant constraints including limited battery life, restricted processing power, variable network bandwidth, smaller screen sizes, and unique security challenges. Wireless communication introduces issues like signal interference, disconnections, and variable quality of service that must be addressed in mobile applications."
    },
    {
      title: "Digital Cellular Systems: TDMA and CDMA",
      description: "Time-Division Multiple Access (TDMA) partitions the radio spectrum into time slots, allowing multiple users to share the same frequency. Code-Division Multiple Access (CDMA) uses spread spectrum technology where all users share the entire spectrum simultaneously using unique pseudo-noise codes. CDMA offers better capacity and is the foundation for 3G and 4G networks."
    },
    {
      title: "Wireless Networking Techniques",
      description: "Six major categories: (1) In-room infrared (40-50m, 1Mbps), (2) In-room radio (Bluetooth, 10m), (3) In-building RF (Wireless LAN, 200m), (4) Campus/Metropolitan packet networks (0.2-5 miles), (5) Wide-area packet/circuit switched networks (CDPD, GSM), and (6) Regional satellite networks. Each has unique characteristics and application scenarios."
    },
    {
      title: "Mobility Bandwidth Tradeoffs",
      description: "Multi-cellular infrastructures range from in-building cells (highest bandwidth, limited mobility) to micro-cells (urban), macro-cells (suburban), and satellites (global). Generally, larger coverage areas offer higher mobility but lower bandwidth. In-building cellular offers highest bi-directional bandwidth with pedestrian-speed mobility, while macro-cellular provides lower bandwidth but vehicular-speed mobility."
    },
    {
      title: "Portable Information Appliances",
      description: "Emerging devices include Palm Pilots, hand-held computers (Sharp Zaurus, VADEM Clio), communicators (Nokia 9000, Motorola Marco), sub-notebooks, notebooks, and laptops. Each device category serves specific use cases with varying capabilities in terms of processing power, battery life, portability, and connectivity options."
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

        <div className="mb-6 rounded-xl overflow-hidden shadow-card">
          <img src={unit1Icon} alt="Unit 1 - Mobile Computing Architecture" className="w-full h-48 object-cover" />
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

export default Unit1;
