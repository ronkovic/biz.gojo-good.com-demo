'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CampaignDetail } from '@/components/campaigns/CampaignDetail';

// ダミーデータ
const dummyCampaign = {
  id: '1',
  title: 'キャンペーンタイトルがここに入ります キャンペーンタイトルがここに入ります',
  mainImage: '/campaign-hero.jpg', // 実際の画像パスに置き換える
  period: '2024年1月1日〜2024年12月31日',
  organizations: [
    { name: '株式会社サンプル', logo: '/company-logo.png' },
    { name: '株式会社サンプル2', logo: '/company-logo2.png' },
  ],
  description: `キャンペーンの詳細な説明がここに入ります。キャンペーンの詳細な説明がここに入ります。
キャンペーンの詳細な説明がここに入ります。キャンペーンの詳細な説明がここに入ります。
キャンペーンの詳細な説明がここに入ります。キャンペーンの詳細な説明がここに入ります。`,
  theme: `重点テーマの説明がここに入ります。重点テーマの説明がここに入ります。
重点テーマの説明がここに入ります。重点テーマの説明がここに入ります。
重点テーマの説明がここに入ります。重点テーマの説明がここに入ります。`,
  ceoMessage: `CEOからのメッセージがここに入ります。CEOからのメッセージがここに入ります。
CEOからのメッセージがここに入ります。CEOからのメッセージがここに入ります。
CEOからのメッセージがここに入ります。CEOからのメッセージがここに入ります。`,
  images: ['/related-image1.jpg', '/related-image2.jpg'],
  stats: {
    currentAmount: 12245678,
    targetAmount: 20000000,
    donorCount: 12433,
  },
  relatedProjects: [
    {
      id: '1',
      title: 'プロジェクトタイトル1',
      image: '/project1.jpg',
      organization: '株式会社サンプル',
    },
    {
      id: '2',
      title: 'プロジェクトタイトル2',
      image: '/project2.jpg',
      organization: '株式会社サンプル2',
    },
  ],
};

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  // 実際のアプリケーションでは、paramsのidを使用してAPIからデータを取得します
  return (
    <DashboardLayout>
      <CampaignDetail campaign={dummyCampaign} />
    </DashboardLayout>
  );
}
