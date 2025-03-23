import { useState } from 'react';
import { useAccount } from 'wagmi';

enum Category {
  FOOD = 0,
  MEDICINE = 1,
  EDUCATION = 2,
  EMERGENCY = 3,
}

export const HelpRequestForm = () => {
  const { address, isConnected } = useAccount();
  const [category, setCategory] = useState<Category>(Category.FOOD);
  const [location, setLocation] = useState('');
  const [reason, setReason] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;

    const formData = new FormData();
    formData.append('walletAddress', address || '');
    formData.append('category', category.toString());
    formData.append('location', location);
    formData.append('reason', reason);
    if (file) {
      formData.append('proof', file);
    }

    try {
      // TODO: Implement API call
      console.log('Submitting request:', formData);
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
      <div className="relative">
        <div className="relative bg-white shadow-xl rounded-lg">
          <h2 className="sr-only">Request Help</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1">
            <div className="px-6 py-10 sm:px-10 lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-900">Request Help</h3>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4">
                <div>
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

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                    Explanation of Need
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="reason"
                      name="reason"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                    Supporting Document (Optional)
                  </label>
                  <div className="mt-1">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isConnected}
                >
                  {isConnected ? 'Submit Request' : 'Connect Wallet to Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
