'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { IntegrationCodeTable } from '@/components/settings/IntegrationCodeTable';
import { SettingsNav } from '@/components/settings/SettingsNav';

// ダミーデータ
const dummyCodes = [
  {
    id: '1',
    name: 'トライアクスHD',
    code: 'code1334dfsj90',
    section: '所属',
    memberCount: 93,
    lastUpdated: '2024-10-30',
  },
  {
    id: '2',
    name: 'TA International',
    code: 'code1334dfsj90',
    memberCount: 271,
    lastUpdated: '2024-10-30',
  },
  {
    id: '3',
    name: 'トライアクス関西',
    code: 'code1334dfsj90',
    memberCount: 93,
    lastUpdated: '2024-10-30',
  },
];

export default function IntegrationCodesPage() {
  const handleCopy = (code: string) => {
    console.log('Copy code:', code);
  };

  const handleDelete = (id: string) => {
    console.log('Delete code:', id);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">設定</h1>
              <p className="mt-1 text-sm text-gray-500">
                アプリケーションの設定を管理します。
              </p>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
              {/* サイドナビゲーション */}
              <div className="col-span-12 sm:col-span-3">
                <SettingsNav />
              </div>

              {/* メインコンテンツ */}
              <div className="col-span-12 sm:col-span-9">
                <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                  <div className="px-4 py-6 sm:p-8">
                    <div>
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        連携コード設定
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        従業員を紐づけるためのコードを設定します。
                      </p>
                    </div>

                    <div className="mt-6">
                      <IntegrationCodeTable
                        codes={dummyCodes}
                        onCopy={handleCopy}
                        onDelete={handleDelete}
                      />
                    </div>
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