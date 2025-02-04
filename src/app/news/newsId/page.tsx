import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="お知らせ詳細"
      description=""
      path="/news/[newsId]"
      parameters={{"newsId":"お知らせID"}}
    />
  );
}