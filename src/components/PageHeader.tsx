interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-8 rounded-b-3xl shadow-elevated">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-primary-foreground/90">{subtitle}</p>}
      </div>
    </header>
  );
};

export default PageHeader;
