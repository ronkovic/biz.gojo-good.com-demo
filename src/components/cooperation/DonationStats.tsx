'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DonationStatsProps {
  title: string;
  value: string | number;
  unit?: string;
  data?: any[];
  className?: string;
  icon?: React.ReactNode;
  showChart?: boolean;
}

export function DonationStats({ 
  title, 
  value, 
  unit = '', 
  data = [], 
  className,
  icon,
  showChart = true
}: DonationStatsProps) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      </div>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">
          {value}
          {unit && <span className="ml-1 text-sm font-medium text-gray-500">{unit}</span>}
        </p>
      </div>
      {showChart && data.length > 0 && (
        <div className="mt-3 h-[70px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}
