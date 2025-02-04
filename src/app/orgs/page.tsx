'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { OrgCard } from '@/components/orgs/OrgCard';
import { OrgFilters } from '@/components/orgs/OrgFilters';

// ダミーデータ
const dummyOrgs = Array(10).fill(null).map((_, i) => ({
  id: `${i + 1}`,
  name: 'ジャパンビジョン',
  type: '特定非営利活動法人（認定・特例認定）',
  category: '災害復興',
  imageUrl: 'https://picsum.photos/800/600?random=' + i,
  logoUrl: 'https://picsum.photos/40/40?random=logo' + i,
}));

export default function OrgsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // TODO: 検索処理の実装
  };

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">GOJO掲載団体</h1>
              <p className="mt-1 text-sm text-gray-500">
                GOJOに掲載されている団体を確認することができます。
              </p>
            </div>
            <button className="text-sm text-gray-500 hover:text-gray-700">
              ↓ CSVダウンロード
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="flex gap-8">
              <div className="w-64 flex-shrink-0">
                <OrgFilters onSearch={handleSearch} />
              </div>
              <div className="flex-1">
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-blue-600" />
                    <p className="mt-2 text-sm text-gray-500">検索中...</p>
                  </div>
                ) : dummyOrgs.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {dummyOrgs.map((org) => (
                        <OrgCard key={org.id} {...org} />
                      ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        {[1, 2, 3, 4, 5].map((page) => (
                          <button
                            key={page}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              page === 1
                                ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-block p-4 rounded-full bg-gray-100">
                      <svg className="h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">該当する団体がありません。</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      条件を変更して検索してください。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}