import { Navbar } from '@/components/shared/Navbar';
import { Container } from '@/components/shared/Container';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/shared/Projects';

const Home = () => {
  return (
    <section className="flex flex-col items-center w-full h-full">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto mt-28 mb-16 px-4">
        <Container>
          <Hero />
          <About />
          <Projects />
        </Container>
      </div>
    </section>
  );
}

export default Home;