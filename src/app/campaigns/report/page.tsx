'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CampaignReport } from '@/components/campaigns/CampaignReport';

export default function CampaignReportPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">レポート</h1>
          <p className="mt-1 text-sm text-gray-500">
            キャンペーンの寄付実績を確認できます。
          </p>
        </div>

        <CampaignReport />
      </div>
    </DashboardLayout>
  );
}