import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="メール認証"
      description="メールアドレスの認証"
      path="/account/verify_email"
      parameters={{}}
    />
  );
}