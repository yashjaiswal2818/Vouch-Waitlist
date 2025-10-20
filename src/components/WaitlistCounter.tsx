import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Clock } from 'lucide-react';
import { EmailService } from '@/lib/emailService';

const WaitlistCounter = () => {
    const [signupCount, setSignupCount] = useState(47);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Get current signup count
        const count = EmailService.getSignupCount();
        setSignupCount(count);

        // Show counter when component is visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('waitlist-counter');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    // Simulate real-time updates (in production, this would come from your backend)
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setSignupCount(prev => prev + Math.floor(Math.random() * 3));
            }, 30000); // Update every 30 seconds

            return () => clearInterval(interval);
        }
    }, [isVisible]);

    return (
        <div id="waitlist-counter" className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-4"
            >
                <div className="flex items-center justify-center gap-2 text-blue-600">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">Join the waitlist</span>
                </div>

                <div className="space-y-2">
                    <motion.div
                        key={signupCount}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-3xl sm:text-4xl font-bold text-gray-900"
                    >
                        {signupCount.toLocaleString()}+
                    </motion.div>
                    <p className="text-sm text-gray-600">founders already waiting</p>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Growing fast</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Limited spots</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default WaitlistCounter;
