'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CampaignTabs } from '@/components/campaigns/CampaignTabs';
import { CampaignList } from '@/components/campaigns/CampaignList';

export default function CampaignsPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'report'>('list');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">キャンペーン</h1>
          <p className="mt-1 text-sm text-gray-500">
            企業が協賛するキャンペーン一覧と寄付実績です。
          </p>
        </div>

        <CampaignTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'list' ? (
          <CampaignList />
        ) : (
          <div className="text-center py-12 text-gray-500">
            レポート機能は開発中です
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}