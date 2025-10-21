import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { ArrowRight, Rocket, Heart, Sparkles, CheckCircle } from 'lucide-react';

const CompellingCTA = () => {
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsModalOpen(true);
            setEmail('');
        }
    };

    const benefits = [
        "Lifetime Deal: Lock in 70% off forever (just $15/month after beta)",
        "Founder Access: Direct line to me for feature requests",
        "Early Bird Perks: Custom widget designs & priority support",
        "Build Together: Your feedback shapes our roadmap"
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Enhanced background elements */}
            <motion.div
                className="absolute top-4 sm:top-10 right-4 sm:right-10 w-32 sm:w-64 h-32 sm:h-64 bg-blue-50 rounded-full blur-3xl opacity-30"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            ></motion.div>

            <motion.div
                className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-40 sm:w-80 h-40 sm:h-80 bg-green-50 rounded-full blur-3xl opacity-20"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            ></motion.div>

            {/* Floating geometric shapes */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`floating-${i}`}
                    className="absolute w-2 sm:w-4 h-2 sm:h-4 bg-blue-400 rounded-full opacity-20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 40 - 20, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: 6 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 3,
                    }}
                />
            ))}

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-8 sm:space-y-12"
                >
                    {/* Header */}
                    <div className="space-y-6 sm:space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs sm:text-sm font-medium">
                            <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Join 100 Early Adopters Shaping the Future</span>
                            <span className="sm:hidden">Join 100 Early Adopters</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                            Reserve Your Spot - Limited to 100 Founders
                        </h2>

                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                            Be part of our exclusive beta program. Get lifetime access to premium features at a fraction of the future price while helping us build the testimonial tool you actually need.
                        </p>
                    </div>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
                        className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto hover:shadow-lg transition-all duration-300"
                    >
                        <motion.h3
                            className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            What Beta Users Get:
                        </motion.h3>

                        <div className="space-y-3 sm:space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-2 sm:gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.4 + index * 0.1,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 5, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3
                                        }}
                                    >
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    </motion.div>
                                    <motion.span
                                        className="text-sm sm:text-base text-gray-600"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        {benefit}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-lg mx-auto"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <Input
                                type="email"
                                placeholder="your-email@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                isRequired
                                className="flex-1"
                                classNames={{
                                    input: "h-14 sm:h-16 text-base sm:text-lg py-3",
                                    inputWrapper: "border-gray-300 focus-within:border-blue-500 h-14 sm:h-16"
                                }}
                            />
                            <Button
                                type="submit"
                                color="primary"
                                className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg"
                                endContent={<ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />}
                            >
                                <span className="hidden sm:inline">Claim My Early Access</span>
                                <span className="sm:hidden">Get Early Access</span>
                            </Button>
                        </form>

                        <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
                            No credit card required. Launch pricing locked forever.
                        </p>
                    </motion.div>

                    {/* Final message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-blue-50 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto"
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Stop Duct-Taping Multiple Tools Together
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            Get the complete testimonial system that actually works - from collection to conversion tracking.
                        </p>
                        <p className="text-sm sm:text-base text-blue-600 font-semibold mt-2">
                            Just $15/month after beta (regularly $49) - locked in forever
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Thank You Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                isDismissable={false}
                hideCloseButton
                classNames={{
                    base: "backdrop-blur-md",
                    backdrop: "bg-black/50 backdrop-blur-md"
                }}
            >
                <ModalContent className="max-w-md mx-auto">
                    <ModalHeader className="flex flex-col items-center text-center pt-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4"
                        >
                            <Heart className="w-8 h-8 text-white" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-gray-900">Welcome to the Beta!</h2>
                    </ModalHeader>

                    <ModalBody className="text-center pb-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <p className="text-gray-600 text-lg">
                                You're now part of the exclusive 100! 🎉
                            </p>
                            <p className="text-gray-500">
                                You'll be the first to know when we launch and get lifetime access to premium features.
                            </p>
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                <Sparkles className="w-4 h-4" />
                                <span>Get ready to build the future together!</span>
                            </div>
                        </motion.div>
                    </ModalBody>

                    <ModalFooter className="justify-center pb-8">
                        <Button
                            color="primary"
                            size="lg"
                            className="px-8"
                            onPress={() => setIsModalOpen(false)}
                        >
                            Let's Build Together
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </section>
    );
};

export default CompellingCTA;
