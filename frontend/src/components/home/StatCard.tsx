import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string | number;
  delay?: number;
}

export const StatCard = ({ label, value, delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
  >
    <p className="text-sm font-medium text-gray-600">{label}</p>
    <p className="mt-2 text-2xl font-semibold text-indigo-600">{value}</p>
  </motion.div>
);
