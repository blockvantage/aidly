import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../shared/Modal';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestModal = ({ isOpen, onClose }: RequestModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request Support">
      <div className="space-y-6">
        <p className="text-base text-gray-600">
          We're here to help. Please provide some information about your needs so we can connect you
          with the right support.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Type of Support Needed
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option>Education Support</option>
              <option>Healthcare Assistance</option>
              <option>Emergency Aid</option>
              <option>Business Support</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Brief Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="Please describe your situation and how we can help..."
            />
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount Needed (USD)
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
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="group relative flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span>Submit Request</span>
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

