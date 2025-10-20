import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import {
  Link2,
  Layout,
  BarChart3,
  Zap,
  Shield,
  Sparkles,
  CheckCircle,
  Star,
  Users,
  Clock,
  DollarSign,
  Network
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '100% Authentic',
    description: 'Our network is 100% authentic, and is the market leader when it comes to truly genuine testimonial collection.',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Customer Centric',
    description: 'We focus on bringing the best quality in our testimonial collection directly to your end-customers. Quality service for a low price.',
    color: 'blue'
  },
  {
    icon: Clock,
    title: '&gt;99% On-Time Performance',
    description: 'Never worry about your quality again. Our testimonial service turns your collection experience into a service that your customers can rely on.',
    color: 'purple'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Think that quality testimonial collection is expensive? Think twice, cause we can match market standard prices from large agencies.',
    color: 'orange'
  },
  {
    icon: Network,
    title: 'Reliable Network',
    description: 'We only build on truly innovative and reliable technology and network effects. Our collection network is scalable and extremely reliable.',
    color: 'indigo'
  },
  {
    icon: Star,
    title: 'The Largest Network',
    description: 'The largest network across the web and growing. With more than 100+ integrations and 15,000+ customers on our network.',
    color: 'pink'
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    pink: 'bg-pink-100 text-pink-600'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const Features = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            The largest 100% authentic testimonial provider in the market
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <CardBody className="p-4 sm:p-6 lg:p-8">
                    <div className="space-y-4 sm:space-y-6">
                      <motion.div
                        className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center ${getColorClasses(feature.color)}`}
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                      </motion.div>

                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;