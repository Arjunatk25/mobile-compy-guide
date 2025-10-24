import { Target, Award, BookOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContentCard from "@/components/ContentCard";
import BottomNav from "@/components/BottomNav";
import heroImage from "@/assets/hero-mobile-computing.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-primary-foreground px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">Mobile Computing</h1>
          <p className="text-lg md:text-xl text-center">IT-T71 • Comprehensive Course Guide</p>
        </div>
      </div>
      
      <main className="max-w-screen-xl mx-auto px-4 py-6 space-y-4">
        <ContentCard title="Course Overview" icon={BookOpen}>
          <p>
            Mobile computing is human–computer interaction by which a computer is expected to be 
            transported during normal usage. This comprehensive course explores mobile communication, 
            mobile hardware, and mobile software. You'll learn about ad-hoc and infrastructure networks, 
            communication protocols, wireless technologies, and mobile application development.
          </p>
          <p className="mt-3">
            Mobile computing represents the convergence of portable devices and wireless networks, 
            enabling ubiquitous computing capabilities. This course covers everything from basic 
            architecture to advanced topics like 3G/4G networks, mobile data management, and 
            application development frameworks.
          </p>
        </ContentCard>

        <ContentCard title="Course Objectives" icon={Target}>
          <ul className="space-y-2 list-disc list-inside">
            <li>Understand the fundamental architecture and limitations of mobile computing systems</li>
            <li>Learn emerging wireless standards including 3G, 4G, and middleware technologies</li>
            <li>Master mobile networking concepts including Mobile IP, GPRS, and security protocols</li>
            <li>Explore mobile data management techniques, transactions, and database models</li>
            <li>Develop proficiency in mobile computing models and development tools</li>
          </ul>
        </ContentCard>

        <ContentCard title="Learning Outcomes" icon={Award}>
          <ul className="space-y-2 list-disc list-inside">
            <li>Design and analyze mobile computing architectures for real-world applications</li>
            <li>Implement mobile networking solutions with appropriate security measures</li>
            <li>Apply mobile data management principles in distributed environments</li>
            <li>Develop mobile applications using industry-standard frameworks and tools</li>
            <li>Evaluate emerging technologies and their impact on mobile computing</li>
          </ul>
        </ContentCard>

        <div className="bg-secondary rounded-xl p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-2">Course Structure</h3>
          <p className="text-muted-foreground text-sm">
            The course is divided into 5 comprehensive units covering theoretical concepts 
            and practical implementations. Navigate through the syllabus to explore each unit 
            in detail.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
