'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { NewsDetail } from '@/components/news/NewsDetail';

// ダミーデータ
const dummyNewsDetail = {
  id: '1',
  title: 'トライアクスアワード2024年開催決定！',
  date: '2024年10月20日',
  category: 'campaigns' as const,
  url: '/news/1',
  content: `
    <h2>STEP1 トライアクスでできることを理解する</h2>
    <p>まずはじめに、トライアクスでできることの全体像を理解しましょう。</p>

    <h2>STEP1 トライアクスとは</h2>
    <p>トライアクスは、企業と学生をつなぐプラットフォームです。</p>

    <h2>STEP2 お試し登録から利用審査までの流れ</h2>
    <p>新たにトライアクスにご登録いただいた団体様は、お試し登録から利用審査までの流れを確認し、利用審査を完了させましょう。</p>

    <h2>STEP2 お試し登録から利用審査までの流れ</h2>
    <p>新たにトライアクスにご登録いただいた団体様は、お試し登録から利用審査までの流れを確認し、利用審査を完了させましょう。</p>

    <h2>STEP3 プロジェクトページの作成から公開までの流れ</h2>
    <p>プロジェクトページの作成前に知っておくべきことやページの作成から公開までの流れを理解しましょう。</p>
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
            <NewsDetail item={newsItem} content={newsItem.content} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
