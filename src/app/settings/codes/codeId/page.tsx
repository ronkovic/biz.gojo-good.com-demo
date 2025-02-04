import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="コード詳細"
      description=""
      path="/settings/codes/[codeId]"
      parameters={{"codeId":"コードID"}}
    />
  );
}