import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="ユーザー一覧"
      description="ユーザー管理"
      path="/users"
      parameters={{}}
    />
  );
}