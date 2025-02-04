import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="協力者詳細"
      description=""
      path="/cooperation/users/[userId]"
      parameters={{"userId":"ユーザーID"}}
    />
  );
}