import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Journey from '@/components/Journey';
import Features from '@/components/Features';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Journey />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
