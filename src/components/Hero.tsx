import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { ArrowRight, Heart, Sparkles, CheckCircle, Star, Users, Shield, Zap, Mail } from 'lucide-react';
import { EmailService } from '@/lib/emailService';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    try {
      const result = await EmailService.addToWaitlist(email, 'hero');
      setSuccessMessage(result.message);
      setIsModalOpen(true);
      setEmail('');
      setError('');
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const trustIndicators = [
    { icon: Shield, text: "Your data is secure and never shared" },
    { icon: Users, text: "Build your network of authentic testimonials in minutes" },
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

          {/* Enhanced CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto space-y-6 px-4 sm:px-0"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Enhanced Email Input Container */}
              <div className="relative">
                <motion.div
                  animate={{
                    scale: isFocused ? 1.02 : 1,
                    boxShadow: isFocused
                      ? '0 20px 40px rgba(37, 99, 235, 0.15)'
                      : '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.2 }}
                  className={`
                    relative rounded-2xl overflow-hidden
                    ${isFocused ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
                  `}
                >
                  {/* Background gradient on focus */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 
                    transition-opacity duration-300
                    ${isFocused ? 'opacity-100' : 'opacity-0'}
                  `} />

                  <div className="relative flex flex-col sm:flex-row gap-3 p-2 bg-white border-2 border-gray-200 rounded-2xl">
                    {/* Email Input */}
                    <div className="flex-1 relative">
                      <Mail className={`
                        absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200
                        ${isFocused ? 'text-blue-600' : 'text-gray-400'}
                      `} />
                      <input
                        type="email"
                        placeholder="Enter your work email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError('');
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="
                          w-full h-14 sm:h-16 pl-12 pr-4
                          text-base sm:text-lg
                          bg-transparent
                          border-none outline-none
                          placeholder:text-gray-400
                          text-gray-900
                        "
                        disabled={isLoading}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="
                        h-14 sm:h-16 px-6 sm:px-8
                        text-base sm:text-lg font-bold
                        bg-gradient-to-r from-blue-600 to-blue-700
                        hover:from-blue-700 hover:to-blue-800
                        text-white rounded-xl
                        shadow-lg hover:shadow-xl
                        transition-all duration-200
                        disabled:opacity-50
                      "
                      endContent={isLoading ? null : <ArrowRight className="w-5 h-5" />}
                      isLoading={isLoading}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span>Joining...</span>
                      ) : (
                        <>
                          <span className="hidden sm:inline">Get Early Access</span>
                          <span className="sm:hidden">Join Now</span>
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>

                {/* Error Message */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-600 text-sm mt-2 text-left pl-4"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Benefits Below Input */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Free forever
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  No setup required
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  GDPR compliant
                </span>
              </div>
            </form>

            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center gap-2 text-sm text-gray-500"
            >
              <span>No credit card required • Launch pricing locked forever</span>
            </motion.div>
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

      {/* Enhanced Thank You Modal */}
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
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg"
            >
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900"
            >
              You're In! 🎉
            </motion.h2>
          </ModalHeader>

          <ModalBody className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-blue-900 font-semibold text-lg">
                  {successMessage}
                </p>
              </div>

              <div className="space-y-3 text-left">
                <p className="text-gray-600 font-medium flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Weekly build-in-public updates in your inbox</span>
                </p>
                <p className="text-gray-600 font-medium flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Early access when we launch</span>
                </p>
                <p className="text-gray-600 font-medium flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Exclusive founder pricing locked in</span>
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mt-4">
                <div className="flex items-center justify-center gap-2 text-sm text-blue-700 font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Let's build something amazing together!</span>
                </div>
              </div>
            </motion.div>
          </ModalBody>

          <ModalFooter className="justify-center pb-6 sm:pb-8 px-4 sm:px-6">
            <Button
              size="lg"
              className="px-8 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold shadow-lg"
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