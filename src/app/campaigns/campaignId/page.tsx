import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="キャンペーン詳細"
      description=""
      path="/campaigns/[campaignId]"
      parameters={{"campaignId":"キャンペーンID"}}
    />
  );
}