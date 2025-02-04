'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BuildingOfficeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
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

interface CampaignDetailProps {
  campaign: {
    id: string;
    title: string;
    mainImage: string;
    period: string;
    organizations: Array<{ name: string; logo: string }>;
    description: string;
    theme: string;
    ceoMessage: string;
    images: string[];
    stats: {
      currentAmount: number;
      targetAmount: number;
      donorCount: number;
    };
    relatedProjects: Array<{
      id: string;
      title: string;
      image: string;
      organization: string;
    }>;
  };
}

export const CampaignDetail = ({ campaign }: CampaignDetailProps) => {
  const chartData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [
      {
        data: [2000000, 4000000, 6000000, 8000000, 10000000, 12245678],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <Link
          href="/campaigns"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          キャンペーン一覧
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="relative h-96">
          <Image
            src={campaign.mainImage}
            alt={campaign.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {campaign.title}
          </h1>

          <div className="flex items-center mb-6">
            {campaign.organizations.map((org, index) => (
              <div key={index} className="flex items-center mr-4">
                <Image
                  src={`https://picsum.photos/48/48?random=${index + 1}`}
                  alt={org.name}
                  width={24}
                  height={24}
                  className="rounded-full mr-2"
                />
                <span className="text-sm text-gray-600">{org.name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">目標金額</div>
              <div className="text-lg font-semibold">
                {campaign.stats.targetAmount.toLocaleString()}円
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">現在の支援総額</div>
              <div className="text-lg font-semibold">
                {campaign.stats.currentAmount.toLocaleString()}円
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">支援者数</div>
              <div className="text-lg font-semibold">
                {campaign.stats.donorCount.toLocaleString()}人
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">キャンペーン概要</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{campaign.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">重点テーマ</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{campaign.theme}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">CEOメッセージ</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{campaign.ceoMessage}</p>
          </div>

          {campaign.images.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">関連イメージ</h2>
              <div className="grid grid-cols-2 gap-4">
                {campaign.images.map((image, index) => (
                  <div key={index} className="relative h-48">
                    <Image
                      src={image}
                      alt={`関連イメージ ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">これまでの実績</h2>
            <div className="h-64">
              <Line options={chartOptions} data={chartData} />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">関連プロジェクト</h2>
            <div className="grid grid-cols-2 gap-4">
              {campaign.relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                      {project.organization}
                    </div>
                    <h3 className="font-medium text-gray-900">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
