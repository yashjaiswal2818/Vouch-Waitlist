import { useState } from 'react';
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
        <h3 className="text-3xl font-bold text-zinc-50">
          Become an Early Adopter.
        </h3>
        <p className="text-lg text-zinc-400">
          Get early access, influence our roadmap, and be the first to elevate your social proof with EchoWidget.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
      </div>
    </section>
  );
};

export default FinalCTA;
