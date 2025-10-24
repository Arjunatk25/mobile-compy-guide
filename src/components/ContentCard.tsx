import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ContentCardProps {
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
}

const ContentCard = ({ title, children, icon: Icon, className = "" }: ContentCardProps) => {
  return (
    <div className={`bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="bg-secondary p-2 rounded-lg">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
};

export default ContentCard;
