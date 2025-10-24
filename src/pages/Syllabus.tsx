import PageHeader from "@/components/PageHeader";
import UnitCard from "@/components/UnitCard";
import BottomNav from "@/components/BottomNav";

const Syllabus = () => {
  const units = [
    {
      unitNumber: 1,
      title: "Introduction to Mobile Computing",
      topicsCount: 6,
    },
    {
      unitNumber: 2,
      title: "Emerging Wireless Standards",
      topicsCount: 5,
    },
    {
      unitNumber: 3,
      title: "Mobile Networking",
      topicsCount: 7,
    },
    {
      unitNumber: 4,
      title: "Mobile Data Management",
      topicsCount: 6,
    },
    {
      unitNumber: 5,
      title: "Mobile Computing Models",
      topicsCount: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Course Syllabus" 
        subtitle="5 Units • Complete Course Coverage"
      />
      
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="space-y-3">
          {units.map((unit) => (
            <UnitCard
              key={unit.unitNumber}
              unitNumber={unit.unitNumber}
              title={unit.title}
              topicsCount={unit.topicsCount}
            />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Syllabus;
