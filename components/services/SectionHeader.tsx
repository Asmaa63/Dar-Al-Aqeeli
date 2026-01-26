interface Props {
  title: string;
  subtitle: string;
  isVisible: boolean;
  delay?: number;
}

export default function SectionHeader({
  title,
  subtitle,
  isVisible,
  delay = 0,
}: Props) {
  return (
    <div
      className={`text-center mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h2 className="text-4xl font-black text-blue-900 mb-4">
        {title}
      </h2>
      <p className="text-lg text-blue-700 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
