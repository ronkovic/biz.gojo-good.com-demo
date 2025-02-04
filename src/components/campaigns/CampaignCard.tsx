'use client';

import Image from 'next/image';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

interface CampaignCardProps {
  title: string;
  imageUrl: string;
  period: string;
  organizations: string[];
  status: 'draft' | 'active' | 'ended' | 'scheduled';
  targetAmount?: number;
}

const statusConfig = {
  draft: { text: '下書き', className: 'text-gray-500 bg-gray-100' },
  active: { text: '受付中', className: 'text-emerald-500 bg-emerald-50' },
  ended: { text: '終了', className: 'text-red-500 bg-red-50' },
  scheduled: { text: '受付予定', className: 'text-blue-500 bg-blue-50' },
};

export const CampaignCard = ({
  title,
  imageUrl,
  period,
  organizations,
  status,
  targetAmount,
}: CampaignCardProps) => {
  const { text: statusText, className: statusClassName } = statusConfig[status];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="mb-4">
          {organizations.map((org, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600 mb-1">
              <BuildingOfficeIcon className="h-4 w-4 mr-1" />
              {org}
            </div>
          ))}
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {title}
        </h3>
        <div className="text-sm text-gray-500 mb-3">
          {period}
        </div>
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClassName}`}>
            {statusText}
          </span>
          {targetAmount && (
            <span className="text-sm font-medium text-gray-900">
              目標金額: {targetAmount.toLocaleString()}円
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
