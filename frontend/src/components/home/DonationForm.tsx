import { useState } from 'react';
import { useAccount } from 'wagmi';

enum Category {
  FOOD = 0,
  MEDICINE = 1,
  EDUCATION = 2,
  EMERGENCY = 3,
}

export const DonationForm = () => {
  const { address, isConnected } = useAccount();
  const [category, setCategory] = useState<Category>(Category.FOOD);
  const [amount, setAmount] = useState<string>('');

  const handleDonate = async () => {
    if (!isConnected || !amount) return;
    
    // TODO: Implement donation logic using wagmi hooks
    console.log('Donating', amount, 'to category', category);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
      <div className="relative">
        <div className="relative bg-white shadow-xl rounded-lg">
          <h2 className="sr-only">Make a Donation</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact information */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-900">Make a Donation</h3>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <div className="mt-1">
                    <select
                      id="category"
                      name="category"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={category}
                      onChange={(e) => setCategory(Number(e.target.value) as Category)}
                    >
                      <option value={Category.FOOD}>Food</option>
                      <option value={Category.MEDICINE}>Medicine</option>
                      <option value={Category.EDUCATION}>Education</option>
                      <option value={Category.EMERGENCY}>Emergency</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Amount (USDC)
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-2">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleDonate}
                  disabled={!isConnected || !amount}
                >
                  {isConnected ? 'Donate' : 'Connect Wallet to Donate'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
