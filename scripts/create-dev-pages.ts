const fs = require('fs');
const path = require('path');

interface Page {
  path: string;
  title: string;
  description?: string;
  parameters?: { [key: string]: string };
}

const pages: Page[] = [
  {
    path: '/home',
    title: 'ホーム',
    description: 'ダッシュボード画面',
  },
  {
    path: '/campaigns',
    title: 'キャンペーン一覧',
    description: 'キャンペーン管理',
  },
  {
    path: '/campaigns/[campaignId]',
    title: 'キャンペーン詳細',
    parameters: { campaignId: 'キャンペーンID' },
  },
  {
    path: '/campaigns/report',
    title: 'キャンペーンレポート',
    description: 'キャンペーン実績レポート',
  },
  {
    path: '/cooperation/users',
    title: '協力者一覧',
    description: '協力者管理',
  },
  {
    path: '/cooperation/users/[userId]',
    title: '協力者詳細',
    parameters: { userId: 'ユーザーID' },
  },
  {
    path: '/cooperation/donations',
    title: '寄付一覧',
    description: '寄付管理',
  },
  {
    path: '/cooperation/report',
    title: '協力者レポート',
    description: '協力者に関する実績レポート',
  },
  {
    path: '/orgs',
    title: '団体一覧',
    description: '団体管理',
  },
  {
    path: '/orgs/[orgId]',
    title: '団体詳細',
    parameters: { orgId: '団体のコングラントID' },
  },
  {
    path: '/orgs/[orgId]/story',
    title: '団体ストーリー',
    parameters: { orgId: '団体のコングラントID' },
  },
  {
    path: '/orgs/[orgId]/projects',
    title: '団体プロジェクト',
    parameters: { orgId: '団体のコングラントID' },
  },
  {
    path: '/orgs/[orgId]/posts',
    title: '団体投稿',
    parameters: { orgId: '団体のコングラントID' },
  },
  {
    path: '/users',
    title: 'ユーザー一覧',
    description: 'ユーザー管理',
  },
  {
    path: '/settings/general',
    title: '一般設定',
    description: '基本設定',
  },
  {
    path: '/settings/codes',
    title: 'コード管理',
    description: '招待コード等の管理',
  },
  {
    path: '/settings/codes/[codeId]',
    title: 'コード詳細',
    parameters: { codeId: 'コードID' },
  },
  {
    path: '/settings/bonus',
    title: 'ボーナス設定',
    description: 'ボーナスポイント設定',
  },
  {
    path: '/settings/2fa',
    title: '2要素認証設定',
    description: '2要素認証の管理',
  },
  {
    path: '/billing',
    title: '請求',
    description: '請求情報の管理',
  },
  {
    path: '/news',
    title: 'お知らせ一覧',
    description: 'お知らせ管理',
  },
  {
    path: '/news/campaign',
    title: 'キャンペーンお知らせ',
    description: 'キャンペーン関連のお知らせ',
  },
  {
    path: '/news/system',
    title: 'システムお知らせ',
    description: 'システム関連のお知らせ',
  },
  {
    path: '/news/info',
    title: '一般お知らせ',
    description: '一般情報のお知らせ',
  },
  {
    path: '/news/[newsId]',
    title: 'お知らせ詳細',
    parameters: { newsId: 'お知らせID' },
  },
  {
    path: '/account',
    title: 'アカウント',
    description: 'アカウント設定',
  },
  {
    path: '/account/verify_email',
    title: 'メール認証',
    description: 'メールアドレスの認証',
  },
];

const template = `import { DevelopmentPage } from '@/components/debug/DevelopmentPage';

export default function Page() {
  return (
    <DevelopmentPage
      title="TITLE"
      description="DESCRIPTION"
      path="PATH"
      parameters={PARAMETERS}
    />
  );
}`;

function createPage(page: Page) {
  const dirPath = path.join(process.cwd(), 'src/app', page.path.replace(/\[([^\]]+)\]/g, '$1'));
  fs.mkdirSync(dirPath, { recursive: true });

  const content = template
    .replace('TITLE', page.title)
    .replace('DESCRIPTION', page.description || '')
    .replace('PATH', page.path)
    .replace('PARAMETERS', JSON.stringify(page.parameters || {}));

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
}

pages.forEach(createPage);
