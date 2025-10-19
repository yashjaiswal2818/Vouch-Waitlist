import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Hero = () => {
  const [email, setEmail] = useState('');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('teaser-card')?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll keep you updated on our journey.",
      });
      setEmail('');
    }
  };

  const words = ['Effortlessly', 'Collect', '&', 'Showcase', 'Customer', 'Love.'];

  return (
    <section id="waitlist" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-50 leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          EchoWidget is a beautifully simple tool for SaaS businesses to gather and display social proof with elegant, embeddable web widgets. Join our journey from day one.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="your-email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-zinc-900 border-zinc-800 text-zinc-50 placeholder:text-zinc-500 focus:ring-blue-500"
          />
          <Button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium button-glow-hover"
          >
            Request Early Access
          </Button>
        </motion.form>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-zinc-500"
        >
          No spam. Unsubscribe at any time. Get a front-row seat as we build.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 relative h-64"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <motion.div 
                id="teaser-card"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative bg-card border border-zinc-800 rounded-lg p-6 max-w-sm card-sophisticated cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <div className="flex-1 text-left">
                    <p className="text-zinc-300 italic mb-2">"...incredible!"</p>
                    <p className="text-sm text-zinc-500">Sarah Chen</p>
                    <p className="text-xs text-zinc-600">CEO, TechCorp</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
