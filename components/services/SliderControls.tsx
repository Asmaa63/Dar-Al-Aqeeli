import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  dir: 'ltr' | 'rtl';
}

export default function SliderControls({
  current,
  total,
  onNext,
  onPrev,
  dir,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-6 mt-10">
      <button
        onClick={onPrev}
        className="w-12 h-12 rounded-xl bg-blue-700 text-white hover:bg-yellow-400 hover:text-blue-900 transition flex items-center justify-center"
      >
        {dir === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
      </button>

      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-8 bg-yellow-400' : 'w-2 bg-blue-300'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="w-12 h-12 rounded-xl bg-blue-700 text-white hover:bg-yellow-400 hover:text-blue-900 transition flex items-center justify-center"
      >
        {dir === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </div>
  );
}
