import { Navbar } from '@/components/ui/magic/Navbar';
import { Container } from '@/components/ui/magic/Container';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';

const Home = () => {
  return (
    <section className="flex flex-col items-center w-full h-full">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto mt-28 mb-16 px-8">
        <Container>
          <Hero />
          <About />
        </Container>
      </div>
    </section>
  );
}

export default Home;