import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="団体詳細"
      description=""
      path="/orgs/[orgId]"
      parameters={{"orgId":"団体のコングラントID"}}
    />
  );
}