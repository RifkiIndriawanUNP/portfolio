import KoiBackground from '@/components/effects/KoiBackground';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Dock from '@/components/layout/Dock';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Quote from '@/components/sections/Quote';

export default function Home() {
  return (
    <>
      <KoiBackground />
      <ScrollReveal />
      <main className="page">
        <Hero />
        <Projects />
        <Experience />
        <Quote />
      </main>
      <Dock />
    </>
  );
}
