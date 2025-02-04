import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="2要素認証設定"
      description="2要素認証の管理"
      path="/settings/2fa"
      parameters={{}}
    />
  );
}