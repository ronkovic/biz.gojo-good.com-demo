'use client';

import { useState } from 'react';
import { CampaignCard } from './CampaignCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// ダミーデータ
const dummyCampaigns = Array(12).fill(null).map((_, i) => ({
  id: i + 1,
  title: 'キャンペーンタイトル×キャンペーンタイトル',
  imageUrl: '/campaign-image.jpg', // 実際の画像パスに置き換える
  period: '2024年10月01日〜2024年12月31日',
  organizations: ['株式会社サンプル'],
  status: i % 4 === 0 ? 'active' : i % 4 === 1 ? 'ended' : i % 4 === 2 ? 'scheduled' : 'draft',
  targetAmount: 600000,
}));

export const CampaignList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = dummyCampaigns.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          1-{Math.min(itemsPerPage, totalItems)}件を表示 (全{totalItems}件)
        </div>
        <div className="flex items-center space-x-4">
          <select
            className="form-select rounded-md border-gray-300 text-sm"
            defaultValue="status"
          >
            <option value="status">ステータス</option>
            <option value="active">受付中</option>
            <option value="ended">終了</option>
            <option value="scheduled">受付予定</option>
            <option value="draft">下書き</option>
          </select>
          <select
            className="form-select rounded-md border-gray-300 text-sm"
            defaultValue="newest"
          >
            <option value="newest">登録が新しい順</option>
            <option value="oldest">登録が古い順</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {dummyCampaigns.map((campaign) => (
          <CampaignCard key={campaign.id} {...campaign} />
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded-md ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
