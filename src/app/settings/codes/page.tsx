import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="コード管理"
      description="招待コード等の管理"
      path="/settings/codes"
      parameters={{}}
    />
  );
}