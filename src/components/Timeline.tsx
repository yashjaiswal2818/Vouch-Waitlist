import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Timeline = () => {
    const updates = [
        {
            date: "MAY 24, 2024",
            title: "We've chosen our core tech stack!",
            link: "Read on X/Twitter →",
            href: "#",
            side: "left"
        },
        {
            date: "MAY 20, 2024",
            title: "What's the one feature you wish your testimonial tool had?",
            link: "Join the discussion on r/SaaS →",
            href: "#",
            side: "right"
        },
        {
            date: "MAY 15, 2024",
            title: "First look at the 'Refined Minimalism' design system.",
            link: "See the thread on X/Twitter →",
            href: "#",
            side: "left"
        }
    ];

    return (
        <section id="journey" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <span>BUILDING IN PUBLIC</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Follow The Journey
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Watch us build Vouch from the ground up, one update at a time.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical spine */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-200"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                        {updates.map((update, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-center ${update.side === 'left' ? 'justify-start' : 'justify-end'}`}
                                initial={{ opacity: 0, x: update.side === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className={`w-full sm:w-5/12 ${update.side === 'left' ? 'sm:pr-8' : 'sm:pl-8'}`}>
                                    <motion.div
                                        whileHover={{
                                            scale: 1.02,
                                            y: -5,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full"></div>
                                            <span className="text-xs sm:text-sm text-blue-600 font-medium">
                                                {update.date}
                                            </span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                            {update.title}
                                        </h3>

                                        <motion.a
                                            href={update.href}
                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm group-hover:gap-3 transition-all duration-300"
                                            whileHover={{ x: 2 }}
                                        >
                                            {update.link}
                                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </motion.a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
