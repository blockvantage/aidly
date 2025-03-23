import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const CallToAction = () => {
  return (
    <section id="cta" className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Be Part of Something Meaningful
            <br />
            <span className="text-indigo-400">Join Aidly Today</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            Together, we can create a world where aid reaches those who need it most. 
            Whether you're here to help or need support, you're part of building a 
            more transparent and empowering future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <motion.a
              href="https://github.com/blockvantage/aidly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:ring-white/40 focus:outline-offset-0 transition-all duration-300"
            >
              <span>Contribute on GitHub</span>
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Background effects */}
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#gradient)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(closest-side,rgba(0,0,0,0.5),transparent)]" />
    </section>
  );
};
