'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { OrgTabs } from '@/components/orgs/OrgTabs';
import { OrgBasicData } from '@/components/orgs/OrgBasicData';
import { Tab } from '@headlessui/react';
import { BookmarkIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

// ダミーデータ
const dummyOrg = {
  id: '1',
  name: 'ジャパンビジョン',
  type: '特定非営利活動法人',
  logo: 'https://picsum.photos/48/48?random=logo',
  representative: '山田太郎',
  address: '〒111-1111 東京都八王子市山田2-32-8 八王子中央ビル5F',
  established: '1906年2月',
  staffCount: '536名',
  website: 'https://www.japanvision.com',
  socialAccounts: {
    facebook: 'https://facebook.com/japanvision',
    instagram: 'https://instagram.com/japanvision',
    twitter: 'https://twitter.com/japanvision',
  },
  donationAmount: 12245678,
  donationCount: 12433,
  description: 'ジャパンビジョンは災害や紛争、社会構造の変化などによって危機にさらされた個人に対して国内外での支援活動を行う、日本発祥のNGO（非政府で非営利の民間団体）です。国際人道支援、災害支援の「緊急医療支援チーム」、動物保護の「アニマルケアサポートチーム」を軸に活動しています。',
  categories: ['災害支援', '海外支援', 'どうぶつ'],
};

export default function OrgDetailPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/orgs" className="flex items-center hover:text-gray-700">
                <ChevronLeftIcon className="h-4 w-4 mr-1" />
                GOJO掲載団体
              </Link>
              <span>/</span>
              <span>{dummyOrg.name}</span>
            </div>

            <div className="mt-4 bg-white shadow rounded-lg">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12">
                      <Image
                        src={dummyOrg.logo}
                        alt={dummyOrg.name}
                        fill
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold text-gray-900">
                          {dummyOrg.name}
                        </h1>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {dummyOrg.type}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center space-x-4">
                        <span className="text-sm text-gray-500">海外支援</span>
                        <span className="text-sm text-gray-500">どうぶつ</span>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <BookmarkIcon className="h-5 w-5 mr-2 text-gray-400" />
                    ブックマーク
                  </button>
                </div>
              </div>

              <div className="px-6 py-4">
                <OrgTabs>
                  <OrgBasicData org={dummyOrg} />
                  <Tab.Panel>
                    <div className="py-12 text-center text-gray-500">
                      ストーリーは準備中です
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="py-12 text-center text-gray-500">
                      プロジェクトは準備中です
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="py-12 text-center text-gray-500">
                      ポストは準備中です
                    </div>
                  </Tab.Panel>
                </OrgTabs>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <div className="text-sm">
                <button className="text-gray-500 hover:text-gray-700">
                  メモを保存
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
