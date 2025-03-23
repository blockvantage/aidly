import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content:
      "Aidly's transparent system gave me confidence that my donations were making a real difference. I could track exactly where my contributions went and see their impact firsthand.",
    author: 'Sarah Chen',
    role: 'Tech Executive & Regular Donor',
    location: 'San Francisco, CA',
    imageUrl: '/testimonials/sarah.jpg',
    stats: { donated: '$15,000', helped: '25 families' },
  },
  {
    content:
      'Thanks to Aidly and their education support program, I was able to complete my coding bootcamp. Now I work as a blockchain developer and help maintain the very platform that helped me.',
    author: 'Marcus Johnson',
    role: 'Former Recipient, Now Contributor',
    location: 'Atlanta, GA',
    imageUrl: '/testimonials/marcus.jpg',
    stats: { received: '$8,000', status: 'Employed' },
  },
  {
    content:
      'The smart contract system ensures every penny goes where it should. As a non-profit leader, this level of transparency and efficiency is exactly what the aid sector needs.',
    author: 'Dr. Maria Rodriguez',
    role: 'NGO Director',
    location: 'Mexico City',
    imageUrl: '/testimonials/maria.jpg',
    stats: { managed: '$250,000', impact: '500+ lives' },
  },
];

export const Testimonials = () => {
  return (
    <section id="impact" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 to-white" />
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="testimonials-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#testimonials-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-semibold leading-8 text-indigo-600"
          >
            Impact Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Real People, Real Change
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            Discover how Aidly is transforming lives through transparent and effective aid distribution.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-gray-300 transition-all duration-300"
            >
              <blockquote>
                <p className="text-lg font-medium leading-8 tracking-tight text-gray-900 before:content-['\201C'] after:content-['\201D']">
                  {testimonial.content}
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="flex items-center gap-x-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-100 ring-4 ring-white group-hover:ring-indigo-50 transition-all">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                    <div className="mt-1 text-sm leading-6 text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-sm leading-6 text-gray-500 border-t border-gray-100 pt-4">
                  {Object.entries(testimonial.stats).map(([key, value]) => (
                    <div key={key} className="flex-1">
                      <div className="font-medium text-gray-900">{value}</div>
                      <div className="capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
