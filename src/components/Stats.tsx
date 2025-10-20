import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, MapPin } from 'lucide-react';

const Stats = () => {
    const stats = [
        {
            number: "100%",
            label: "Delivered with zero friction",
            icon: CheckCircle,
            color: "text-green-600"
        },
        {
            number: "&gt;99%",
            label: "Of all our testimonials are collected on-time",
            icon: Clock,
            color: "text-blue-600"
        },
        {
            number: "25+",
            label: "Integrations across platforms",
            icon: MapPin,
            color: "text-purple-600"
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Why you should collect with us
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        We think testimonial collection should be straightforward.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="text-center space-y-4 sm:space-y-6"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto"
                                >
                                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${stat.color}`} />
                                </motion.div>

                                <div className="space-y-2">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                                    >
                                        {stat.number}
                                    </motion.div>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
