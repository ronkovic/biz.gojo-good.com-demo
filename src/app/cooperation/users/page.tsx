'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { UserList } from '@/components/cooperation/UserList';

// ダミーデータ
const dummyUsers = Array(10).fill(null).map((_, i) => ({
  id: `${i + 1}`,
  name: i === 0 ? 'YURI' : i === 1 ? 'ユーザー名' : i === 2 ? 'みみちゃん' : i === 3 ? 'ナカジマ' : i === 4 ? '名もなき支援者' : i === 5 ? 'ハナコ' : i === 6 ? 'カフェ好き' : 'ユーザー名',
  avatar: `https://picsum.photos/40/40?random=${i}`,
  organization: '株式会社トライアウス',
  department: i === 3 ? 'リアライズ株式会社 営業部' : i === 5 ? 'NPO事業部' : i === 4 ? '開発部' : '法人事業部',
  amount: 12340,
  lastDonationDate: '2024-10-30T20:30:30',
  lastLoginDate: '2024-10-30T20:30:30',
}));

export default function CooperationUsersPage() {
  const [isLoading, setIsLoading] = useState(false);

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
              </div>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                ↓ CSVダウンロード
              </button>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <div className="text-sm text-gray-500 mb-4">
                  1-100件を表示（全124,489件）
                </div>
                <UserList users={dummyUsers} isLoading={isLoading} />
              </div>
              <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    前へ
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    次へ
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      全<span className="font-medium">124,489</span>件
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">前へ</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        1
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        2
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        3
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        4
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        5
                      </button>
                      <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">次へ</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}