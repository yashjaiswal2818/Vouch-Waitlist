import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Link2, Layout, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: 'Effortless Collection',
    description: 'Gather testimonials with a simple, shareable link. No friction for your customers.',
  },
  {
    icon: Layout,
    title: 'Stunning Widgets',
    description: "Display your customer love in widgets that match your brand's aesthetic. Clean, minimal, and fast.",
  },
  {
    icon: BarChart3,
    title: 'Insightful Dashboard',
    description: 'Manage all your feedback in one place. See trends, find your best quotes, and never lose a great story.',
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-zinc-50 text-center mb-16"
        >
          What We're Building
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card border-zinc-800 p-8 card-sophisticated transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-0.5 bg-blue-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-50 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
