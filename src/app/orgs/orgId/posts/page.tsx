import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="団体投稿"
      description=""
      path="/orgs/[orgId]/posts"
      parameters={{"orgId":"団体のコングラントID"}}
    />
  );
}