'use client';

import { useState } from 'react';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

type Donation = {
  id: string;
  organization: {
    id: string;
    name: string;
    logo: string;
    category: string;
    subCategory: string;
  };
  donor: {
    id: string;
    name: string;
    organization: string;
    department: string;
  };
  amount: number;
  date: string;
};

interface DonationListProps {
  donations: Donation[];
  isLoading?: boolean;
}

export const DonationList = ({ donations, isLoading }: DonationListProps) => {
  if (isLoading) {
    return (
      <div className="text-center py-4">
        <div className="text-gray-500">検索中</div>
      </div>
    );
  }

  if (donations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex justify-center items-center mb-4">
          <div className="p-4 bg-gray-100 rounded-full">
            <svg
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-900">該当する寄付データはありません</h3>
        <p className="mt-1 text-sm text-gray-500">条件を変更してお試しください。</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              寄付先
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              寄付者
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              寄付額
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              寄付日時
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              操作
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {donations.map((donation) => (
            <tr key={donation.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image
                      src={donation.organization.logo}
                      alt={donation.organization.name}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {donation.organization.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {donation.organization.category} / {donation.organization.subCategory}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{donation.donor.name}</div>
                <div className="text-sm text-gray-500">
                  {donation.donor.organization} / {donation.donor.department}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                {donation.amount.toLocaleString()}円
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {formatDate(donation.date)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <button className="text-blue-600 hover:text-blue-900">詳細</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
