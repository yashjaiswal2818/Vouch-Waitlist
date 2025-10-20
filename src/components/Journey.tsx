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
    <section id="journey" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-zinc-950/50 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 mb-3 sm:mb-4">
            Follow The Journey
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">Building in public, one milestone at a time</p>
        </motion.div>

        <div className="relative">
          {/* Animated center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/60 to-blue-500/20 origin-top"
          />

          <div className="space-y-8 sm:space-y-12 md:space-y-24">
            {journeyUpdates.map((update, index) => {
              const Icon = update.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid md:grid-cols-2 gap-6 sm:gap-8 items-center ${isLeft ? '' : 'md:direction-rtl'
                    }`}
                >
                  {/* Content */}
                  <div className={`${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:col-start-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <Card className="relative bg-gradient-to-br from-card to-zinc-900/50 border-zinc-800 p-4 sm:p-6 lg:p-8 rounded-2xl overflow-hidden group cursor-pointer">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500" />

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/50 via-transparent to-blue-500/50 blur-sm" />
                        </div>

                        <div className="relative">
                          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <span className="px-2 sm:px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 tracking-wider">
                              {update.date}
                            </span>
                            <span className="text-xs text-zinc-500 font-medium">{update.platform}</span>
                          </div>

                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-50 mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                            {update.title}
                          </h3>

                          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-3 sm:mb-4">
                            {update.description}
                          </p>

                          {update.link !== '#' && (
                            <a
                              href={update.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link text-sm sm:text-base"
                            >
                              Read more
                              <motion.span
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                              >
                                →
                              </motion.span>
                            </a>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Icon node - centered */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15 + 0.2,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      className="relative"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse" />

                      {/* Icon container */}
                      <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-4 border-background shadow-2xl">
                        <Icon className="w-7 h-7 lg:w-9 lg:h-9 text-white" strokeWidth={2.5} />
                      </div>

                      {/* Progress ring */}
                      <svg className="absolute -inset-2 w-20 h-20 lg:w-24 lg:h-24 -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="38"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="239"
                          strokeDashoffset={239 - (239 * (index + 1)) / journeyUpdates.length}
                          className="text-blue-500/30"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Mobile icon */}
                  <div className="md:hidden flex justify-center mb-3 sm:mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg" />
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>
                  </div>
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
