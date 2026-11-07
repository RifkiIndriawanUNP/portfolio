'use client';
import { useEffect, useRef } from 'react';
import { KoiPond } from '@/lib/koi';

/** Canvas koi di belakang seluruh halaman. Klik kiri di luar kartu = jatuhkan pelet. */
export default function KoiBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const pond = new KoiPond(ref.current!);
    pond.start();
    const onResize = () => pond.resize();
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const target = e.target as Element | null;
      if (target?.closest?.('[data-glass],a,button,input')) return;
      pond.drop(e.clientX, e.clientY);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('click', onClick);
    return () => {
      pond.stop();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return <canvas ref={ref} className="koi" aria-hidden="true" />;
}
