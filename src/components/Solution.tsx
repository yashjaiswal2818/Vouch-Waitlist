import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import {
    MessageSquare,
    Layout,
    BarChart3,
    Globe,
    CheckCircle,
    XCircle,
    ArrowRight,
} from 'lucide-react';
import { useRef } from 'react';

const Solution = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const features = [
        {
            icon: MessageSquare,
            title: "COLLECT - Automated & Effortless",
            subtitle: "Smart Collection Forms",
            description: "Beautiful, branded forms that actually get responses. Auto-request triggers, multi-channel collection, video testimonials, and import existing reviews.",
            items: [
                "Smart Collection Forms: Beautiful, branded forms that actually get responses",
                "Auto-Request Triggers: Automatically ask for testimonials at the perfect moment",
                "Multi-Channel Collection: Gather from email, SMS, in-app popups, or QR codes",
                "Video Testimonials: One-click video recording right from customer's browser",
                "Import Existing Reviews: Pull from Google, G2, Trustpilot, LinkedIn in seconds"
            ],
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: Layout,
            title: "MANAGE - Like Having a Testimonial Assistant",
            subtitle: "Smart Moderation Dashboard",
            description: "Approve, edit, or flag testimonials with AI-powered spam detection. Tagging & organization, response templates, media library, and NPS integration.",
            items: [
                "Smart Moderation Dashboard: Approve, edit, or flag testimonials with AI-powered spam detection",
                "Tagging & Organization: Sort by product, feature, use case, or customer segment",
                "Response Templates: Thank customers automatically when they submit",
                "Media Library: Store screenshots, logos, and headshots in one place",
                "NPS Integration: Convert high scores into testimonial requests automatically"
            ],
            color: "bg-green-50 border-green-200"
        },
        {
            icon: BarChart3,
            title: "DISPLAY - Beyond Basic Widgets",
            subtitle: "10+ Widget Styles",
            description: "Wall of love, carousel, cards, popups, sidebars - all customizable. Smart display rules, A/B testing built-in, performance optimized, and SEO friendly.",
            items: [
                "10+ Widget Styles: Wall of love, carousel, cards, popups, sidebars - all customizable",
                "Smart Display Rules: Show relevant testimonials based on page, visitor behavior, or UTM parameters",
                "A/B Testing Built-in: Test different testimonial layouts and see what converts",
                "Performance Optimized: Lazy loading, CDN delivery, zero impact on page speed",
                "SEO Friendly: Schema markup for rich snippets in Google search results"
            ],
            color: "bg-purple-50 border-purple-200"
        },
        {
            icon: Globe,
            title: "ANALYZE - Know What's Working",
            subtitle: "Conversion Tracking",
            description: "See which testimonials drive the most sales. Sentiment analysis, widget analytics, customer insights, and ROI calculator.",
            items: [
                "Conversion Tracking: See which testimonials drive the most sales",
                "Sentiment Analysis: Understand what customers love most about your product",
                "Widget Analytics: Views, clicks, engagement rates for each testimonial",
                "Customer Insights: Identify your best advocates and testimonial contributors",
                "ROI Calculator: Measure the actual revenue impact of social proof"
            ],
            color: "bg-orange-50 border-orange-200"
        }
    ];

    const processSteps = [
        "Customer makes purchase",
        "Auto-triggers testimonial request",
        "Customer submits via branded form",
        "AI checks for quality/spam",
        "You approve with one click",
        "Displays on perfect page location",
        "Tracks conversion impact",
        "You see ROI in dashboard"
    ];

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Vouch: Your Full-Stack Social Proof Engine
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4 sm:px-0">
                        It's Not Just a Snippet - It's Your Complete Testimonial System
                    </p>
                </motion.div>

                {/* Stacked Cards Container - Fixed Centering */}
                <div
                    ref={containerRef}
                    className="relative"
                    style={{ height: `${(features.length + 1) * 100}vh` }}
                >
                    <div className="sticky top-0 h-screen w-full">
                        <div className="h-full w-full flex items-center justify-center px-2 sm:px-4">
                            <div className="relative w-full max-w-5xl">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;

                                    // Calculate scroll positions for each card
                                    const cardStart = index / features.length;
                                    const cardEnd = (index + 1) / features.length;

                                    // Y position animation
                                    const y = useTransform(
                                        scrollYProgress,
                                        [
                                            Math.max(0, cardStart - 0.05),
                                            cardStart,
                                            cardEnd - 0.05,
                                            cardEnd
                                        ],
                                        [
                                            100,   // Start below
                                            0,     // Center
                                            0,     // Hold
                                            -100   // Exit above
                                        ]
                                    );

                                    // Opacity animation
                                    const opacity = useTransform(
                                        scrollYProgress,
                                        [
                                            Math.max(0, cardStart - 0.05),
                                            cardStart,
                                            cardEnd - 0.05,
                                            cardEnd
                                        ],
                                        [0, 1, 1, 0]
                                    );

                                    // Scale animation
                                    const scale = useTransform(
                                        scrollYProgress,
                                        [
                                            Math.max(0, cardStart - 0.05),
                                            cardStart,
                                            cardEnd - 0.05,
                                            cardEnd
                                        ],
                                        [0.9, 1, 1, 0.9]
                                    );

                                    return (
                                        <motion.div
                                            key={index}
                                            className="absolute inset-0 flex items-center justify-center"
                                            style={{
                                                y,
                                                opacity,
                                                scale,
                                                zIndex: features.length - index
                                            }}
                                        >
                                            <Card className={`w-full ${feature.color} border-2 shadow-2xl`}>
                                                <CardBody className="p-4 sm:p-6 md:p-8 lg:p-12">
                                                    {/* Header Section */}
                                                    <div className="mb-6 sm:mb-8">
                                                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/50 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
                                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                                                                    {feature.title}
                                                                </h3>
                                                                <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                                                                    {feature.subtitle}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                                                            {feature.description}
                                                        </p>
                                                    </div>

                                                    {/* Features List */}
                                                    <div className="grid gap-2 sm:gap-3">
                                                        {feature.items.slice(0, 3).map((item, itemIndex) => (
                                                            <div
                                                                key={itemIndex}
                                                                className="flex items-start gap-2 sm:gap-3"
                                                            >
                                                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                                <span className="text-xs sm:text-sm md:text-base text-gray-700 line-clamp-2">{item}</span>
                                                            </div>
                                                        ))}
                                                        {feature.items.length > 3 && (
                                                            <p className="text-xs sm:text-sm text-gray-500 ml-6 sm:ml-8 italic">
                                                                +{feature.items.length - 3} more features...
                                                            </p>
                                                        )}
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 sm:mt-16 lg:mt-20"
                >
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                            See The Full System in Action
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="text-center space-y-2 sm:space-y-3">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-sm sm:text-base md:text-lg shadow-lg">
                                            {index + 1}
                                        </div>
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed px-1 sm:px-2">
                                            {step}
                                        </p>
                                    </div>
                                    {index < processSteps.length - 1 && index % 2 === 0 && (
                                        <ArrowRight className="hidden sm:block absolute top-4 sm:top-6 -right-2 sm:-right-3 w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-center text-gray-600 mt-6 sm:mt-8 text-sm sm:text-base md:text-lg italic">
                            All of this happens while you focus on building your business.
                        </p>
                    </div>
                </motion.div>

                {/* What We're NOT vs What We ARE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 sm:mt-16 lg:mt-20"
                >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
                        The Real Difference: Built for Founders, By a Founder
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                        <div className="bg-red-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-red-200">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <XCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                What We're NOT:
                            </h4>
                            <ul className="space-y-3 sm:space-y-4">
                                {[
                                    "Not another $299/month \"enterprise\" tool with features you'll never use",
                                    "Not a basic widget that requires 10 other tools to actually work",
                                    "Not built by a team that's never actually collected testimonials themselves"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 sm:gap-4">
                                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base md:text-lg">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-green-200">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                What We ARE:
                            </h4>
                            <ul className="space-y-3 sm:space-y-4">
                                {[
                                    "Complete System: Collection → Management → Display → Analysis in one tool",
                                    "Affordable: Founder-friendly pricing that grows with your business",
                                    "Actually Useful: Every feature suggested and tested by real users",
                                    "Support That Cares: Direct access to the founder who's using the same tool"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 sm:gap-4">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base md:text-lg">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Solution;