import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    name: 'Total Aid Distributed',
    value: '$2.5M+',
    icon: CurrencyDollarIcon,
    description: 'in direct financial assistance',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'People Helped',
    value: '5,000+',
    icon: UserGroupIcon,
    description: 'lives positively impacted',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 3,
    name: 'Countries Reached',
    value: '45+',
    icon: GlobeAltIcon,
    description: 'across 6 continents',
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    id: 4,
    name: 'Success Rate',
    value: '99.9%',
    icon: ChartBarIcon,
    description: 'of aid reaches recipients',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export const Stats = () => {
  return (
    <section id="stats" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Our Impact in Numbers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Every transaction is transparent, every contribution makes a difference
            </motion.p>
          </div>

          <motion.dl
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group flex flex-col rounded-2xl bg-white p-8 text-center ring-1 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 transition-all duration-300"
              >
                <dt className="text-base leading-7 text-gray-600">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ring-1 ring-white/10 group-hover:shadow-md transition-all duration-300">
                    <div className={`rounded-lg bg-gradient-to-br ${stat.gradient} p-3`}>
                      <stat.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  {stat.name}
                </dt>
                <dd className="mt-4">
                  <p className="text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{stat.description}</p>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};
