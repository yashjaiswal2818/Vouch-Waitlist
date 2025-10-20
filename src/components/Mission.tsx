import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs sm:text-sm font-medium">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>OUR PHILOSOPHY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                It's More Than a Snippet.
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Customer testimonials aren't just quotes; they're stories. They're the most authentic marketing you have. Our mission is to provide a tool so beautiful and intuitive that it does justice to your customers' words, helping you build genuine trust, not just social proof.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center justify-center space-y-4 sm:space-y-6"
          >
            <div className="relative w-full max-w-lg">
              <img
                src="/img2.png"
                alt="Our philosophy - building tools that matter"
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg font-medium text-gray-700 text-center"
            >
              Building tools that matter
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;