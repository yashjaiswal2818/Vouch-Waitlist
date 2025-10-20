import { motion } from 'framer-motion';
import { XCircle, DollarSign, Zap, AlertTriangle } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: XCircle,
            title: "No more chasing customers for testimonials via email",
            description: "Stop the endless follow-ups and manual collection process that wastes your time and frustrates customers."
        },
        {
            icon: AlertTriangle,
            title: "No more ugly testimonial widgets that kill your conversion rate",
            description: "Generic widgets that look unprofessional and actually hurt your sales instead of helping them."
        },
        {
            icon: DollarSign,
            title: "No more paying $99+/month for features you'll never use",
            description: "Stop overpaying for enterprise tools with bloated features that don't match your actual needs."
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Stop Losing Sales to Lack of Social Proof</span>
                        <span className="sm:hidden">Stop Losing Sales</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        The Problem With Basic Testimonial Widgets
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4 sm:px-0">
                        Most testimonial tools give you a snippet and leave you hanging. You still need to manually collect reviews, chase customers, manage submissions, deal with spam, organize content, and pray it actually converts. That's not a solution - that's just moving your problem to a prettier box.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                                </div>

                                <div className="space-y-3 sm:space-y-4">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                        {problem.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Just authentic social proof that sells, starting at student-friendly pricing
                        </h3>
                        <p className="text-base sm:text-lg text-gray-700">
                            Built for real businesses, by a real founder who understands the struggle.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;