import { useState } from 'react';

export function useSlider(totalItems: number, itemsPerView: number) {
  const [current, setCurrent] = useState(0);
  const maxSlide = Math.max(0, Math.ceil(totalItems / itemsPerView) - 1);

  const next = () => setCurrent(prev => Math.min(prev + 1, maxSlide));
  const prev = () => setCurrent(prev => Math.max(prev - 1, 0));

  return {
    current,
    maxSlide,
    next,
    prev,
    setCurrent,
  };
}
