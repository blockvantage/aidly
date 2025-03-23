import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../shared/Modal';
import { ArrowRightIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/outline';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal = ({ isOpen, onClose }: DonateModalProps) => {
  const [donationType, setDonationType] = useState('direct');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Make a Contribution">
      <div className="space-y-6">
        <p className="text-base text-gray-600">
          Your contribution will directly help those in need. Every transaction is recorded on the
          blockchain, ensuring complete transparency and accountability.
        </p>

        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-700">How would you like to help?</label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setDonationType('direct')}
              className={`relative flex flex-col items-center rounded-lg border p-4 text-sm focus:outline-none transition-colors duration-200 ${
                donationType === 'direct'
                  ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600'
                  : 'border-gray-300 hover:border-indigo-300 hover:bg-indigo-50/50'
              }`}
            >
              <HeartIcon
                className={`h-6 w-6 transition-colors duration-200 ${
                  donationType === 'direct' ? 'text-indigo-600' : 'text-gray-400'
                }`}
              />
              <span
                className={`mt-2 font-medium transition-colors duration-200 ${
                  donationType === 'direct' ? 'text-indigo-600' : 'text-gray-900'
                }`}
              >
                Direct Support
              </span>
              <span className="mt-1 text-xs text-gray-500">Help a specific request</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setDonationType('pool')}
              className={`relative flex flex-col items-center rounded-lg border p-4 text-sm focus:outline-none transition-colors duration-200 ${
                donationType === 'pool'
                  ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600'
                  : 'border-gray-300 hover:border-indigo-300 hover:bg-indigo-50/50'
              }`}
            >
              <UsersIcon
                className={`h-6 w-6 transition-colors duration-200 ${
                  donationType === 'pool' ? 'text-indigo-600' : 'text-gray-400'
                }`}
              />
              <span
                className={`mt-2 font-medium transition-colors duration-200 ${
                  donationType === 'pool' ? 'text-indigo-600' : 'text-gray-900'
                }`}
              >
                Community Pool
              </span>
              <span className="mt-1 text-xs text-gray-500">Support multiple causes</span>
            </motion.button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {donationType === 'direct' && (
            <div>
              <label htmlFor="request" className="block text-sm font-medium text-gray-700">
                Select Request to Support
              </label>
              <select
                id="request"
                name="request"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Education Support - Maria G.</option>
                <option>Healthcare Assistance - John D.</option>
                <option>Business Support - Samuel K.</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount (USD)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                className="block w-full rounded-md border border-gray-300 pl-7 pr-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onClose}
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span>Connect Wallet to Donate</span>
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

