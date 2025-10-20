import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { ArrowRight, Heart, Sparkles, CheckCircle, Star, Users, Shield, Zap } from 'lucide-react';
import { EmailService } from '@/lib/emailService';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      try {
        const result = await EmailService.addToWaitlist(email, 'hero');
        setSuccessMessage(result.message);
        setIsModalOpen(true);
        setEmail('');
      } catch (error) {
        console.error('Signup failed:', error);
        setSuccessMessage('Something went wrong. Please try again.');
        setIsModalOpen(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const trustIndicators = [
    { icon: Shield, text: "Your data is secure and never shared" },
    { icon: Users, text: "47 founders already on the waitlist" },
    { icon: Zap, text: "Get weekly build-in-public updates" }
  ];

  return (
    <section id="waitlist" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-16 sm:pt-20">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-15"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs sm:text-sm font-medium"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Join 100 Early Adopters Shaping the Future</span>
            <span className="sm:hidden">Join 100 Early Adopters</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto"
          >
            Turn Happy Customers Into{' '}
            <span className="text-blue-600">Your Best Sales Team</span>
          </motion.h1>

          {/* Supporting Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0"
          >
            The simplest way to collect, manage, and showcase customer testimonials that actually convert visitors into customers.
          </motion.p>

          {/* One-liner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto px-4 sm:px-0"
          >
            <p className="text-base sm:text-lg text-gray-700 font-medium bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6">
              Vouch automatically collects authentic customer testimonials and displays them beautifully on your website in under 5 minutes.
            </p>
          </motion.div>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-md mx-auto space-y-4 sm:space-y-6 px-4 sm:px-0"
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Input
                type="email"
                placeholder="your-email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
                className="flex-1"
                classNames={{
                  input: "h-12 sm:h-14 text-base sm:text-lg",
                  inputWrapper: "border-2 border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 rounded-xl"
                }}
              />
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold rounded-xl"
                endContent={isLoading ? null : <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                isLoading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : (
                  <>
                    <span className="hidden sm:inline">Claim My Early Access</span>
                    <span className="sm:hidden">Get Early Access</span>
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs sm:text-sm text-gray-500 text-center">
              No credit card required. Launch pricing locked forever.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600 px-4 sm:px-0"
          >
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span className="text-center">{indicator.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 sm:mt-16 flex justify-center"
          >
            <div className="relative max-w-4xl w-full">
              <img
                src="/img1.png"
                alt="Testimonial collection across devices - smartphone, tablet, and laptop showing forms"
                className="w-full h-auto max-w-3xl mx-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
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
        <ModalContent className="max-w-sm sm:max-w-md mx-auto">
          <ModalHeader className="flex flex-col items-center text-center pt-6 sm:pt-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3 sm:mb-4"
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome to the Beta!</h2>
          </ModalHeader>

          <ModalBody className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-gray-600 text-base sm:text-lg">
                {successMessage}
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                We'll send you weekly updates on our progress and early access when we launch.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Let's Build Together!</span>
              </div>
            </motion.div>
          </ModalBody>

          <ModalFooter className="justify-center pb-6 sm:pb-8 px-4 sm:px-6">
            <Button
              color="primary"
              size="lg"
              className="px-6 sm:px-8 text-sm sm:text-base"
              onPress={() => setIsModalOpen(false)}
            >
              Continue Exploring
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Hero;