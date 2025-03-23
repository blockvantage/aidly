import { motion } from 'framer-motion';
import { ArrowPathIcon, ClipboardDocumentCheckIcon, UserGroupIcon, WalletIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'For Donors',
    description: 'Connect your wallet and choose a category to contribute. Track your impact in real-time through our transparent on-chain system.',
    icon: WalletIcon,
    steps: [
      'Connect wallet & select category',
      'Make USDC contribution',
      'Track real-time impact',
      'Receive proof of impact'
    ]
  },
  {
    name: 'For Help Seekers',
    description: 'Request support through our streamlined process. Maintain dignity while receiving aid and contribute back to the community.',
    icon: UserGroupIcon,
    steps: [
      'Submit aid request',
      'Verification process',
      'Receive direct aid',
      'Submit proof of use'
    ]
  },
  {
    name: 'Proof & Verification',
    description: 'We ensure transparency through our verification process. All aid distribution is tracked on-chain and requires proof of proper use.',
    icon: ClipboardDocumentCheckIcon,
    steps: [
      'Admin review of requests',
      'Smart contract verification',
      'Transparent distribution',
      'Public proof submission'
    ]
  },
  {
    name: 'Community Growth',
    description: 'Recipients are encouraged to contribute back by learning new skills, helping others, or participating in community tasks.',
    icon: ArrowPathIcon,
    steps: [
      'Complete learning tasks',
      'Help onboard others',
      'Share success stories',
      'Build community trust'
    ]
  }
];

export const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            How Aidly Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            A transparent and empowering process for both donors and recipients
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {steps.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 3) }}
              className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div className="flex items-center gap-x-4">
                <section.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{section.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{section.description}</p>
              <div className="mt-8 space-y-4">
                {section.steps.map((step, stepIndex) => (
                  <div
                    key={step}
                    className="flex items-center gap-x-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">
                      {stepIndex + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
