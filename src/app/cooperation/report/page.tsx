'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DonationStats } from '@/components/cooperation/DonationStats';
import { BanknotesIcon, UsersIcon, ArrowPathIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// ダミーデータ
const chartData = Array.from({ length: 12 }, (_, i) => ({
  date: `2024-${String(i + 1).padStart(2, '0')}`,
  value: Math.floor(Math.random() * 1000000) + 500000,
}));

const usersChartData = Array.from({ length: 12 }, (_, i) => ({
  date: `2024-${String(i + 1).padStart(2, '0')}`,
  value: Math.floor(Math.random() * 500) + 1000,
}));

export default function ReportPage() {
  const [isLoading] = useState(false);

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">企業連携ユーザー</h1>
          <p className="mt-1 text-sm text-gray-500">
            企業連携コードに紐づいたユーザーを記録します。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>すべての企業連携コード</option>
                </select>
                <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>すべてのセクション</option>
                </select>
                <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>2024年10月</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">従業員寄付実績</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                <DonationStats
                  title="寄付額"
                  value="2,876,650"
                  unit="円"
                  data={chartData}
                  icon={<BanknotesIcon className="h-5 w-5 text-gray-400" />}
                />
                <DonationStats
                  title="連携コード登録数"
                  value="1,832"
                  unit="名"
                  data={usersChartData}
                  icon={<UsersIcon className="h-5 w-5 text-gray-400" />}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-5">
                <DonationStats
                  title="寄付者数"
                  value="1,013"
                  unit="名"
                  showChart={false}
                  icon={<UsersIcon className="h-5 w-5 text-gray-400" />}
                />
                <DonationStats
                  title="寄付回数"
                  value="2,433"
                  unit="回"
                  showChart={false}
                  icon={<ArrowPathIcon className="h-5 w-5 text-gray-400" />}
                />
                <DonationStats
                  title="平均寄付額"
                  value="350"
                  unit="円/1人"
                  showChart={false}
                  icon={<ChartBarIcon className="h-5 w-5 text-gray-400" />}
                />
                <DonationStats
                  title="ログイン率"
                  value="62"
                  unit="%"
                  showChart={false}
                  icon={<UsersIcon className="h-5 w-5 text-gray-400" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}