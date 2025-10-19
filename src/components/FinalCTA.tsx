import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const FinalCTA = () => {
  const [email, setEmail] = useState('');

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

  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="container mx-auto max-w-2xl text-center space-y-8">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-zinc-50"
        >
          Become an Early Adopter.
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-zinc-400"
        >
          Get early access, influence our roadmap, and be the first to elevate your social proof with EchoWidget.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
      </div>
    </section>
  );
};

export default FinalCTA;
