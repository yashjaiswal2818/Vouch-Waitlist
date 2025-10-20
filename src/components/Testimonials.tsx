import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        company: "TechStart",
        author: "Sarah Chen",
        role: "CEO",
        content: "Vouch transformed our testimonial collection process. We went from manually chasing customers to automated, authentic social proof that actually converts.",
        rating: 5,
        metric: "40%",
        metricLabel: "Increase in conversion rate"
    },
    {
        company: "SaaS Solutions",
        author: "Mike Rodriguez",
        role: "Marketing Director",
        content: "The quality of testimonials we collect now is incredible. Our customers love the experience, and we love the results.",
        rating: 5,
        metric: "99%",
        metricLabel: "Customer satisfaction"
    },
    {
        company: "E-commerce Plus",
        author: "Lisa Wang",
        role: "Founder",
        content: "Finally, a testimonial tool that actually works. The setup was incredibly easy, and our customers love the experience.",
        rating: 5,
        metric: "3x",
        metricLabel: "More testimonials collected"
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        What customers are saying
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        Find out what we do for our customers to boost their social proof impact.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group"
                        >
                            <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                                <CardBody className="p-4 sm:p-6 lg:p-8">
                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Quote Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center"
                                        >
                                            <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="space-y-3 sm:space-y-4">
                                            <p className="text-gray-700 italic text-sm sm:text-base lg:text-lg leading-relaxed">
                                                "{testimonial.content}"
                                            </p>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                                                ))}
                                            </div>

                                            {/* Author */}
                                            <div className="space-y-1">
                                                <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                                                <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                                            </div>

                                            {/* Metric */}
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                                className="bg-blue-50 rounded-xl p-3 sm:p-4 text-center"
                                            >
                                                <div className="text-2xl sm:text-3xl font-bold text-blue-600">{testimonial.metric}</div>
                                                <div className="text-xs sm:text-sm text-blue-700 font-medium">{testimonial.metricLabel}</div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-colors"
                    >
                        See more success stories
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
