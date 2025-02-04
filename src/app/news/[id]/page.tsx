'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { PageHeader } from '@/components/common/PageHeader';
import { TableWrapper } from '@/components/common/TableWrapper';
import Link from 'next/link';

// ダミーデータ
const dummyNewsDetail = {
  id: '1',
  title: 'トライアクスアワード2024年開催決定！',
  date: '2024年10月20日',
  category: 'campaign' as const,
  url: '/news/1',
  content: `
    <div class="space-y-8">
      <section>
        <h2 class="text-lg font-semibold text-gray-900">STEP1 トライアクスでできることを理解する</h2>
        <p class="mt-2 text-base text-gray-600">まずはじめに、トライアクスでできることの全体像を理解しましょう。</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-gray-900">STEP1 トライアクスとは</h2>
        <p class="mt-2 text-base text-gray-600">トライアクスは、企業と学生をつなぐプラットフォームです。</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-gray-900">STEP2 お試し登録から利用審査までの流れ</h2>
        <p class="mt-2 text-base text-gray-600">新たにトライアクスにご登録いただいた団体様は、お試し登録から利用審査までの流れを確認し、利用審査を完了させましょう。</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-gray-900">STEP2 お試し登録から利用審査までの流れ</h2>
        <p class="mt-2 text-base text-gray-600">新たにトライアクスにご登録いただいた団体様は、お試し登録から利用審査までの流れを確認し、利用審査を完了させましょう。</p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-gray-900">STEP3 プロジェクトページの作成から公開までの流れ</h2>
        <p class="mt-2 text-base text-gray-600">プロジェクトページの作成前に知っておくべきことやページの作成から公開までの流れを理解しましょう。</p>
      </section>
    </div>
  `,
};

// カテゴリーに応じたラベルの色を定義
const categoryColors = {
  campaign: 'bg-orange-50 text-orange-700 ring-orange-600/20',
  system: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  info: 'bg-green-50 text-green-700 ring-green-600/20',
} as const;

// カテゴリーの日本語表示名を定義
const categoryLabels = {
  campaign: 'キャンペーン',
  system: 'システム',
  info: 'お知らせ',
} as const;

export default function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // TODO: APIから詳細データを取得
  const newsItem = dummyNewsDetail;

  const sidebar = (
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
  );

  return (
    <DashboardLayout>
      <PageHeader
        title="お知らせ"
        description="キャンペーンやシステムメンテナンスなど、トライアクスからのお知らせです。"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <TableWrapper sidebar={sidebar}>
            <div className="overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
              <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                <div className="flex items-center gap-x-3">
                  <p className="text-sm text-gray-500">{newsItem.date}</p>
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                      categoryColors[newsItem.category]
                    }`}
                  >
                    {categoryLabels[newsItem.category]}
                  </span>
                </div>
                <h1 className="mt-3 text-xl font-semibold leading-6 text-gray-900">
                  {newsItem.title}
                </h1>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
              </div>
            </div>
          </TableWrapper>
        </div>
      </div>
    </DashboardLayout>
  );
}
