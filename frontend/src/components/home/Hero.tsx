import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { DonateModal } from './DonateModal';
import { RequestModal } from './RequestModal';

export const Hero = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white pt-16 sm:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-[40rem] left-1/2 -z-10 h-[80rem] w-[80rem] -translate-x-1/2 opacity-30 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-violet-200 [mask-image:url(/grid.svg)] dark:from-indigo-500/50 dark:to-violet-500/50"
            style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-indigo-200 to-violet-200 [mask-image:url(/grid.svg)] dark:from-indigo-500/50 dark:to-violet-500/50"
            style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center space-x-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
              <span>Made with Love</span>
              <span className="h-3.5 w-px bg-indigo-600/20" />
              <span>For those in need</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            <span className="block">Aidly</span>
            <span className="mt-2 block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Empowering Communities Through Aid
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Join a community-driven platform where every contribution is transparent and traceable.
            Together, we're building a future where aid reaches those who need it most, verified by
            blockchain technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.button
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  '0 10px 15px -3px rgba(79, 70, 229, 0.3), 0 4px 6px -2px rgba(79, 70, 229, 0.2)',
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDonateModal(true)}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Make a Contribution
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </motion.span>
              </span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
            <motion.button
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  '0 10px 15px -3px rgba(79, 70, 229, 0.2), 0 4px 6px -2px rgba(79, 70, 229, 0.1)',
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 1 // Offset animation to create alternating effect
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgb(238, 242, 255)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowRequestModal(true)}
              className="group relative overflow-hidden rounded-lg border-2 border-indigo-600 bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-md transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request Support
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-16 max-w-5xl grid-cols-3 gap-8 sm:mt-20 lg:mt-24 lg:grid"
        >
          {[
            { label: 'Community Members', value: '2,000+' },
            { label: 'Aid Distributed', value: '$1.2M+' },
            { label: 'Success Rate', value: '99.9%' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex flex-col items-center justify-center rounded-2xl bg-white/60 p-8 backdrop-blur-sm ring-1 ring-gray-900/10"
            >
              <dt className="text-sm font-medium leading-6 text-gray-600">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modals */}
      <DonateModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
      <RequestModal isOpen={showRequestModal} onClose={() => setShowRequestModal(false)} />
    </div>
  );
};


