'use client';

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  subStats?: {
    label: string;
    value: string;
    unit: string;
  }[];
}

const StatCard = ({ title, value, unit, subStats }: StatCardProps) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <button className="text-gray-400 hover:text-gray-600">
        <InformationCircleIcon className="h-5 w-5" />
      </button>
    </div>
    <div className="mb-4">
      <div className="text-3xl font-bold text-gray-900">
        {value}
        <span className="text-sm font-normal ml-1">{unit}</span>
      </div>
    </div>
    {subStats && (
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        {subStats.map((stat, index) => (
          <div key={index}>
            <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
            <div className="font-medium">
              {stat.value}
              <span className="text-sm text-gray-500 ml-1">{stat.unit}</span>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

export const OverallReport = () => {
  const chartData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [
      {
        data: [2000000, 2200000, 2400000, 2600000, 2800000, 2876650],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title="寄付額"
          value="2,876,650"
          unit="円"
          subStats={[
            { label: "寄付回数", value: "28,294", unit: "回" },
            { label: "1人当たり寄付額", value: "350", unit: "円" },
            { label: "受講者寄付割合", value: "42", unit: "%" },
          ]}
        />
        <StatCard
          title="従業員等付与額"
          value="982,840"
          unit="円"
          subStats={[
            { label: "登録人数", value: "980", unit: "名" },
            { label: "1人当たり寄付額", value: "480", unit: "円" },
            { label: "ログイン率", value: "54", unit: "%" },
          ]}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm text-gray-500">寄付額推移</h3>
          <div className="text-sm text-gray-500">2024年10月</div>
        </div>
        <div className="h-64">
          <Line options={chartOptions} data={chartData} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">クイックメニュー</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🏢', title: 'GOJO構成団体を見る' },
            { icon: '🎯', title: 'キャンペーンを見る' },
            { icon: '👥', title: '従業員パフォーマンスを見る' },
            { icon: '⚙️', title: '基本設定' },
          ].map((item, index) => (
            <button
              key={index}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm text-gray-700">{item.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
