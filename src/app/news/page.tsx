'use client';

import { useSearchParams } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { NewsFilterTabs } from '@/components/news/NewsFilterTabs';
import { NewsList } from '@/components/news/NewsList';

// ダミーデータ
const dummyNews = [
  {
    id: '1',
    title: 'トライアクスアワード2024年開催決定！',
    date: '2024年10月20日',
    category: 'campaigns',
    url: '/news/1',
  },
  {
    id: '2',
    title: 'システムメンテナンスのお知らせ',
    date: '2024年10月15日',
    category: 'systems',
    url: '/news/2',
  },
  {
    id: '3',
    title: '年末年始の営業について',
    date: '2024年10月10日',
    category: 'notices',
    url: '/news/3',
  },
] as const;

const tabs = [
  { id: 'all', name: 'すべて', count: dummyNews.length },
  {
    id: 'campaigns',
    name: 'キャンペーン',
    count: dummyNews.filter((n) => n.category === 'campaigns').length,
  },
  {
    id: 'systems',
    name: 'システム',
    count: dummyNews.filter((n) => n.category === 'systems').length,
  },
  {
    id: 'notices',
    name: 'お知らせ',
    count: dummyNews.filter((n) => n.category === 'notices').length,
  },
];

export default function NewsPage() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'all';

  const filteredNews = dummyNews.filter((news) => {
    if (currentTab === 'all') return true;
    return news.category === currentTab;
  });

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">お知らせ</h1>
              <p className="mt-1 text-sm text-gray-500">
                キャンペーンやシステムメンテナンスなど、トライアクスからのお知らせです。
              </p>
            </div>

            <div className="mt-6">
              <NewsFilterTabs tabs={tabs} currentTab={currentTab} />
              <div className="mt-6">
                <NewsList items={filteredNews} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}