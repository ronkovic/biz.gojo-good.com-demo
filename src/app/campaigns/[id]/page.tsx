'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CampaignDetail } from '@/components/campaigns/CampaignDetail';

// ダミーデータ
const dummyCampaign = {
  id: '1',
  title: 'キャンペーンタイトルがここに入ります キャンペーンタイトルがここに入ります',
  mainImage: 'https://picsum.photos/1200/600', // メイン画像
  period: '2024年1月1日〜2024年12月31日',
  organizations: [
    { name: '株式会社サンプル', logo: 'https://picsum.photos/48/48?random=1' },
    { name: '株式会社サンプル2', logo: 'https://picsum.photos/48/48?random=2' },
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
  images: [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2'
  ],
  stats: {
    currentAmount: 12245678,
    targetAmount: 20000000,
    donorCount: 12433,
  },
  relatedProjects: [
    {
      id: '1',
      title: 'プロジェクトタイトル1',
      image: 'https://picsum.photos/800/600?random=3',
      organization: '株式会社サンプル',
    },
    {
      id: '2',
      title: 'プロジェクトタイトル2',
      image: 'https://picsum.photos/800/600?random=4',
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
