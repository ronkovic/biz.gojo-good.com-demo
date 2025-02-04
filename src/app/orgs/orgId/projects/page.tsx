import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="団体プロジェクト"
      description=""
      path="/orgs/[orgId]/projects"
      parameters={{"orgId":"団体のコングラントID"}}
    />
  );
}