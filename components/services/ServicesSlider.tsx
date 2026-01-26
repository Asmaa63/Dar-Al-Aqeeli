import { useSlider } from './useSlider';
import SliderControls from './SliderControls';
import ServiceCard from './ServiceCard';

interface Props {
  items: any[];
  type: string;
  t: any;
  dir: 'ltr' | 'rtl';
  isVisible: boolean;
  cardsPerView: number;
}

export default function ServicesSlider({
  items,
  type,
  t,
  dir,
  isVisible,
  cardsPerView,
}: Props) {
  const slider = useSlider(items.length, cardsPerView);

  return (
    <div className="relative mb-24">
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(${
              dir === 'rtl'
                ? slider.current * (100 / cardsPerView)
                : -slider.current * (100 / cardsPerView)
            }%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.key}
              className="flex-shrink-0"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <ServiceCard
                service={item}
                index={index}
                type={type}
                t={t}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>

      <SliderControls
        current={slider.current}
        total={slider.maxSlide + 1}
        onNext={slider.next}
        onPrev={slider.prev}
        dir={dir}
      />
    </div>
  );
}
