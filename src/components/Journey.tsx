import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Twitter, MessageSquare, Figma, Code, Sparkles, Rocket } from 'lucide-react';

const journeyUpdates = [
  {
    icon: Rocket,
    date: 'MAY 28, 2024',
    title: 'Launching our "Building in Public" landing page!',
    description: 'Follow along as we build EchoWidget from the ground up.',
    link: '#',
    platform: 'Launch'
  },
  {
    icon: Code,
    date: 'MAY 24, 2024',
    title: "We've chosen our core tech stack!",
    description: 'React, TypeScript, and Tailwind for the frontend. Supabase for the backend.',
    link: 'https://twitter.com',
    platform: 'Twitter'
  },
  {
    icon: MessageSquare,
    date: 'MAY 20, 2024',
    title: "What's the one feature you wish your testimonial tool had?",
    description: 'Join the discussion and help shape our roadmap.',
    link: 'https://reddit.com',
    platform: 'Reddit'
  },
  {
    icon: Figma,
    date: 'MAY 15, 2024',
    title: 'First look at the "Refined Minimalism" design system.',
    description: 'Clean, dark, and elegant. Just the way we like it.',
    link: 'https://twitter.com',
    platform: 'Twitter'
  },
  {
    icon: Sparkles,
    date: 'MAY 10, 2024',
    title: 'The idea is born.',
    description: 'Every great product starts with a problem. Ours? Making social proof actually look good.',
    link: 'https://twitter.com',
    platform: 'Twitter'
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 bg-zinc-950/50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-zinc-50 text-center mb-16"
        >
          Follow The Journey
        </motion.h2>

        <div className="relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-8 top-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"
          />

          <div className="space-y-8">
            {journeyUpdates.map((update, index) => {
              const Icon = update.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="absolute left-0 w-16 h-16 rounded-full bg-card border border-zinc-800 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-blue-500" />
                  </motion.div>

                  <Card className="bg-card border-zinc-800 p-6 card-sophisticated card-hover-glow transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-xs font-semibold text-zinc-500 tracking-wider">
                        {update.date}
                      </p>
                      <span className="text-xs text-zinc-600">{update.platform}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-50 mb-2">
                      {update.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">
                      {update.description}
                    </p>
                    {update.link !== '#' && (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                      >
                        Read more →
                      </a>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
