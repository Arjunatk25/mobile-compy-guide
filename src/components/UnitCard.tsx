import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface UnitCardProps {
  unitNumber: number;
  title: string;
  topicsCount: number;
}

const UnitCard = ({ unitNumber, title, topicsCount }: UnitCardProps) => {
  return (
    <Link to={`/unit/${unitNumber}`}>
      <div className="bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-all hover:scale-[1.02] active:scale-[0.98] border border-border">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-primary font-bold text-sm mb-1">UNIT {unitNumber}</div>
            <h3 className="text-foreground font-semibold mb-2 leading-snug">{title}</h3>
            <p className="text-sm text-muted-foreground">{topicsCount} topics</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-3" />
        </div>
      </div>
    </Link>
  );
};

export default UnitCard;
