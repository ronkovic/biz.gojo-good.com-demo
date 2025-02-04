import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="団体ストーリー"
      description=""
      path="/orgs/[orgId]/story"
      parameters={{"orgId":"団体のコングラントID"}}
    />
  );
}