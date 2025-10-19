import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Hero = () => {
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
    <section id="waitlist" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-50 leading-tight animate-slide-up">
          Effortlessly Collect & Showcase Customer Love.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto animate-slide-up stagger-1">
          EchoWidget is a beautifully simple tool for SaaS businesses to gather and display social proof with elegant, embeddable web widgets. Join our journey from day one.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-slide-up stagger-2">
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
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium glow-animation"
          >
            Request Early Access
          </Button>
        </form>

        <p className="text-sm text-zinc-500 animate-slide-up stagger-3">
          No spam. Unsubscribe at any time. Get a front-row seat as we build.
        </p>

        <div className="mt-16 animate-fade-in relative h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-card border border-zinc-800 rounded-lg p-6 max-w-sm shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <div className="flex-1 text-left">
                    <p className="text-zinc-300 italic mb-2">"...incredible!"</p>
                    <p className="text-sm text-zinc-500">Sarah Chen</p>
                    <p className="text-xs text-zinc-600">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
