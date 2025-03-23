import { motion } from 'framer-motion';
import { StatCard } from './StatCard';

interface PoolCategory {
  name: string;
  amount: number;
}

interface PoolStatusProps {
  categories: PoolCategory[];
}

export const PoolStatus = ({ categories }: PoolStatusProps) => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-gray-900">Live Pool Status</h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <StatCard
            key={category.name}
            label={category.name}
            value={`$${category.amount.toLocaleString()}`}
            delay={0.1 * index}
          />
        ))}
      </div>
    </motion.div>
  </div>
);
