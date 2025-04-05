import { ScrollProgress } from '@/components/ui/magic/scroll-progress';
import { Container } from '@/components/shared/Container';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Timeline } from '@/components/sections/Timeline';

const Home = () => {
  return (
    <section className="flex flex-col items-center w-full h-full">
      <ScrollProgress className="top-[65px]" />
      <div className="w-full max-w-6xl mx-auto mt-28 mb-16 px-4">
        <Container>
          <Hero />
          <About />
          <Projects />
          <Timeline />
        </Container>
      </div>
    </section>
  );
}

export default Home;