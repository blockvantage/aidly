import { motion } from 'framer-motion';
import { AcademicCapIcon, HeartIcon, HomeIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const categories = [
  {
    name: 'Food & Basic Needs',
    description: 'Support essential nutrition and daily necessities for families in need.',
    icon: HomeIcon,
    stats: {
      balance: '25,420 USDC',
      totalDonated: '125,750 USDC',
      totalReleased: '100,330 USDC',
      helpedCount: '205 families'
    }
  },
  {
    name: 'Medicine & Healthcare',
    description: 'Fund critical medical care and essential medications.',
    icon: HeartIcon,
    stats: {
      balance: '32,180 USDC',
      totalDonated: '89,400 USDC',
      totalReleased: '57,220 USDC',
      helpedCount: '143 people'
    }
  },
  {
    name: 'Education',
    description: 'Enable access to learning resources and educational opportunities.',
    icon: AcademicCapIcon,
    stats: {
      balance: '18,650 USDC',
      totalDonated: '45,800 USDC',
      totalReleased: '27,150 USDC',
      helpedCount: '98 students'
    }
  },
  {
    name: 'Emergency Relief',
    description: 'Provide immediate assistance in crisis situations.',
    icon: ShieldExclamationIcon,
    stats: {
      balance: '42,300 USDC',
      totalDonated: '156,900 USDC',
      totalReleased: '114,600 USDC',
      helpedCount: '312 cases'
    }
  }
];

export const AidCategories = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Transparent Aid Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Every donation is tracked on-chain with real-time updates. Choose a category to make an impact.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 3) }}
              className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div className="flex items-center gap-x-4">
                <category.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{category.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{category.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex-1 min-w-[45%]">
                  <div className="text-sm text-gray-500">Current Balance</div>
                  <div className="mt-1 text-lg font-semibold text-indigo-600">{category.stats.balance}</div>
                </div>
                <div className="flex-1 min-w-[45%]">
                  <div className="text-sm text-gray-500">Total Donated</div>
                  <div className="mt-1 text-lg font-semibold text-green-600">{category.stats.totalDonated}</div>
                </div>
                <div className="flex-1 min-w-[45%]">
                  <div className="text-sm text-gray-500">Total Released</div>
                  <div className="mt-1 text-lg font-semibold text-violet-600">{category.stats.totalReleased}</div>
                </div>
                <div className="flex-1 min-w-[45%]">
                  <div className="text-sm text-gray-500">People Helped</div>
                  <div className="mt-1 text-lg font-semibold text-gray-900">{category.stats.helpedCount}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
