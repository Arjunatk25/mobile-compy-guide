import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";
import unit2Icon from "@/assets/unit2-icon.jpg";

const Unit2 = () => {
  const topics = [
    {
      title: "Emerging Wireless Network Standards",
      description: "ITU (International Telecommunication Union) and ETSI (European Telecommunications Standards Institute) lead global efforts to promote cooperation in wireless network development. Their goal is achieving seamless communication for global consumers through technical cooperation. IMT-2000 aims to provide direction and assist convergence of competing wireless access technologies."
    },
    {
      title: "IMT-2000 Vision and Goals",
      description: "IMT-2000 seeks to incorporate a variety of systems, achieve high degree of commonality worldwide, ensure compatibility with fixed networks, provide high quality comparable to fixed networks, and accommodate pocket-size terminals. Mobile network requirements include worldwide terminal usage, connection between mobile and fixed users, service portability, and efficient spectrum use."
    },
    {
      title: "Third Generation (3G) Requirements",
      description: "3G networks must support multi-cell environments (satellite, macro, micro, pico), multi-operator operation, near wireline voice quality, universal coverage, and various data rates: 144 kbps (mobile speed), 384 kbps (portable speed), 2 Mbps (in-building). Features include seamless inter-frequency handoff, satellite access, and flexibility for evolution."
    },
    {
      title: "UMTS (Universal Mobile Telecommunications System)",
      description: "UMTS is ETSI's third-generation wireless system project. In January 1998, ETSI agreed on two UTRA methods: W-CDMA for paired spectrum and TD-CDMA for unpaired spectrum. The system aims to provide multimedia services with various bit rates and quality requirements for different teleservices including voice, video, data, and messaging."
    },
    {
      title: "TD-CDMA (Time Division CDMA)",
      description: "TD-CDMA integrates CDMA into existing GSM TDMA structure. It uses 1.6 MHz channels with time-segmented TDMA and CDMA coding. Supports 8 users per time slot with adjustable uplink/downlink ratio. Offers spectral efficiency twice that of GSM, data rates up to 2 Mbps indoor and 1 Mbps in all environments, with no soft handoff required."
    },
    {
      title: "W-CDMA (Wideband CDMA)",
      description: "W-CDMA uses spread spectrum where entire bandwidth is shared by multiple subscribers. Uses PN codes for signal modulation and spreading. Operates at 4.096 Mcps using 5 MHz bandwidth. Features include: multimedia bandwidth (up to 384 kbps), adaptive antennas with SDMA, fast synchronization, GSM-like protocol structure, inter-frequency handoff, and hierarchical cell structures."
    },
    {
      title: "SDMA (Space Division Multiple Access)",
      description: "SDMA uses focused radio beams to enhance quality and coverage. Tracks subscriber location adaptively with intelligent antenna arrays. Manages interference to increase capacity, link quality, and signal range while reducing transmission power. Benefits extend the life and profitability of deployed infrastructure."
    },
    {
      title: "Mobility Support Software & Middleware",
      description: "Three main approaches: (1) Remote-Node: hides wireless artifacts to run wired applications unchanged, (2) Client Proxy: minimizes transmission costs via buffering and batch transmission (e.g., Oracle Mobile Agents), (3) Replication: provides offline access via local database replicas with periodic synchronization. Products include Oracle Lite, Sybase SQL Remote, and MobileWare Office Server."
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

        <div className="mb-6 rounded-xl overflow-hidden shadow-card">
          <img src={unit2Icon} alt="Unit 2 - Emerging Wireless Standards" className="w-full h-48 object-cover" />
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

export default Unit2;
