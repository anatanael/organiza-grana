interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export default function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="bg-primary/25 text-primary flex h-9 items-center justify-center rounded-sm">
        <div className="iconContainer">{icon}</div>
      </span>

      <div>
        <h3 className="font-bold">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
