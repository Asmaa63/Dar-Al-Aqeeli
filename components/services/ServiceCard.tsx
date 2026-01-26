import Image from 'next/image';

interface Props {
  service: any;
  index: number;
  type: string;
  t: any;
  isVisible: boolean;
}

export default function ServiceCard({
  service,
  index,
  type,
  t,
  isVisible,
}: Props) {
  const Icon = service.icon;

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden h-full">
        <div className="relative h-56">
          <Image
            src={service.image}
            alt={t(type, `items.${service.key}.title`)}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />

          <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-900" />
          </div>

          <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
            {t(type, `items.${service.key}.title`)}
          </h3>
        </div>

        <div className="p-6">
          <p className="text-blue-900 text-sm leading-relaxed">
            {t(type, `items.${service.key}.desc`)}
          </p>
        </div>
      </div>
    </div>
  );
}
