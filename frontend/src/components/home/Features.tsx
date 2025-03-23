import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Transparent & Secure',
    description: 'Every transaction is recorded on the blockchain, ensuring complete transparency and security.',
    icon: ShieldCheckIcon,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Real-Time Impact',
    description: 'Track the journey of your contribution and see its impact as it happens.',
    icon: ChartBarIcon,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Zero Platform Fees',
    description: '100% of your donation goes directly to those in need. We never take a cut.',
    icon: CurrencyDollarIcon,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Community-Driven',
    description: 'Join a global network of donors and recipients creating positive change together.',
    icon: UserGroupIcon,
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    name: 'Global Reach',
    description: 'Support causes and individuals anywhere in the world without barriers.',
    icon: GlobeAltIcon,
    gradient: 'from-red-500 to-rose-500',
  },
  {
    name: 'Smart Contracts',
    description: 'Automated, trustless distribution ensures funds are used as intended.',
    icon: SparklesIcon,
    gradient: 'from-violet-500 to-purple-500',
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            Why Choose Aidly
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            The Future of Aid Distribution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Built on Base, powered by smart contracts, and driven by community. Experience a new way of
            giving that's transparent, efficient, and truly impactful.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200/70 hover:shadow-md hover:ring-gray-300 transition-all duration-300"
              >
                <div className="flex items-center gap-x-3">
                  <div
                    className={`rounded-lg bg-gradient-to-br ${feature.gradient} p-3 text-white shadow-md group-hover:shadow-lg transition-shadow`}
                  >
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};

