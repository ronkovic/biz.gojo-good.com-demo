'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { NewsDetail } from '@/components/news/NewsDetail';
import Link from 'next/link';

// ダミーデータ
const dummyNewsDetail = {
  id: '1',
  title: 'トライアクスアワード2024年開催決定！',
  date: '2024年10月20日',
  category: 'campaigns' as const,
  url: '/news/1',
  content: `
    <div class="prose prose-sm max-w-none">
      <h2 class="text-base font-semibold text-gray-900">STEP1 トライアクスでできることを理解する</h2>
      <p class="mt-2 text-sm text-gray-600">まずはじめに、トライアクスでできることの全体像を理解しましょう。</p>

      <h2 class="mt-8 text-base font-semibold text-gray-900">STEP1 トライアクスとは</h2>
      <p class="mt-2 text-sm text-gray-600">トライアクスは、企業と学生をつなぐプラットフォームです。</p>

      <h2 class="mt-8 text-base font-semibold text-gray-900">STEP2 お試し登録から利用審査までの流れ</h2>
      <p class="mt-2 text-sm text-gray-600">新たにトライアクスにご登録いただいた団体様は、お試し登録から利用審査までの流れを確認し、利用審査を完了させましょう。</p>

      <h2 class="mt-8 text-base font-semibold text-gray-900">STEP2 お試し登録から利用審査までの流れ</h2>
      <p class="mt-2 text-sm text-gray-600">新たにトライアクスにご登録いただいた団体様は、お試し登録から利用審査までの流れを確認し、利用審査を完了させましょう。</p>

      <h2 class="mt-8 text-base font-semibold text-gray-900">STEP3 プロジェクトページの作成から公開までの流れ</h2>
      <p class="mt-2 text-sm text-gray-600">プロジェクトページの作成前に知っておくべきことやページの作成から公開までの流れを理解しましょう。</p>
    </div>
  `,
};

export default function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // TODO: APIから詳細データを取得
  const newsItem = dummyNewsDetail;

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="mb-6">
              <Link
                href="/news"
                className="inline-flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
                一覧へ戻る
              </Link>
            </div>
            <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
              <div className="px-4 py-6 sm:px-6">
                <div className="flex items-center gap-x-3">
                  <p className="text-sm text-gray-500">{newsItem.date}</p>
                  <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">
                    キャンペーン
                  </span>
                </div>
                <h1 className="mt-3 text-xl font-semibold text-gray-900">
                  {newsItem.title}
                </h1>
              </div>
              <div className="px-4 py-6 sm:px-6">
                <div
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
