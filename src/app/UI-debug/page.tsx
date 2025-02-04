import Link from 'next/link';

const pages = [
  {
    category: '認証関連',
    categoryEn: 'Authentication',
    items: [
      {
        path: '/login',
        title: 'ログインページ',
        titleEn: 'Login Page',
      },
      {
        path: '/login/2fa',
        title: '2要素認証',
        titleEn: 'Two-Factor Authentication',
      },
      {
        path: '/login/forgot_password',
        title: 'パスワード再発行',
        titleEn: 'Forgot Password',
      },
      {
        path: '/login/reset_password',
        title: 'パスワード再設定',
        titleEn: 'Reset Password',
      },
      {
        path: '/touroku',
        title: 'ユーザー登録',
        titleEn: 'User Registration',
      },
    ],
  },
  {
    category: 'メイン機能',
    categoryEn: 'Main Features',
    items: [
      {
        path: '/home',
        title: 'ホーム',
        titleEn: 'Home',
      },
      {
        path: '/campaigns',
        title: 'キャンペーン一覧',
        titleEn: 'Campaign List',
      },
      {
        path: '/campaigns/123',
        title: 'キャンペーン詳細（サンプル）',
        titleEn: 'Campaign Details (Sample)',
      },
      {
        path: '/campaigns/report',
        title: 'キャンペーンレポート',
        titleEn: 'Campaign Report',
      },
    ],
  },
  {
    category: '協力者管理',
    categoryEn: 'Cooperator Management',
    items: [
      {
        path: '/cooperation/users',
        title: '協力者一覧',
        titleEn: 'Cooperator List',
      },
      {
        path: '/cooperation/users/123',
        title: '協力者詳細（サンプル）',
        titleEn: 'Cooperator Details (Sample)',
      },
      {
        path: '/cooperation/donations',
        title: '寄付一覧',
        titleEn: 'Donation List',
      },
      {
        path: '/cooperation/report',
        title: '協力者レポート',
        titleEn: 'Cooperator Report',
      },
    ],
  },
  {
    category: '団体管理',
    categoryEn: 'Organization Management',
    items: [
      {
        path: '/orgs',
        title: '団体一覧',
        titleEn: 'Organization List',
      },
      {
        path: '/orgs/123',
        title: '団体詳細（サンプル）',
        titleEn: 'Organization Details (Sample)',
      },
      {
        path: '/orgs/123/story',
        title: '団体ストーリー（サンプル）',
        titleEn: 'Organization Story (Sample)',
      },
      {
        path: '/orgs/123/projects',
        title: '団体プロジェクト（サンプル）',
        titleEn: 'Organization Projects (Sample)',
      },
      {
        path: '/orgs/123/posts',
        title: '団体投稿（サンプル）',
        titleEn: 'Organization Posts (Sample)',
      },
    ],
  },
  {
    category: 'ユーザー管理',
    categoryEn: 'User Management',
    items: [
      {
        path: '/users',
        title: 'ユーザー一覧',
        titleEn: 'User List',
      },
    ],
  },
  {
    category: '設定',
    categoryEn: 'Settings',
    items: [
      {
        path: '/settings/general',
        title: '一般設定',
        titleEn: 'General Settings',
      },
      {
        path: '/settings/codes',
        title: 'コード管理',
        titleEn: 'Code Management',
      },
      {
        path: '/settings/codes/123',
        title: 'コード詳細（サンプル）',
        titleEn: 'Code Details (Sample)',
      },
      {
        path: '/settings/bonus',
        title: 'ボーナス設定',
        titleEn: 'Bonus Settings',
      },
      {
        path: '/settings/2fa',
        title: '2要素認証設定',
        titleEn: '2FA Settings',
      },
    ],
  },
  {
    category: 'その他',
    categoryEn: 'Others',
    items: [
      {
        path: '/billing',
        title: '請求',
        titleEn: 'Billing',
      },
      {
        path: '/news',
        title: 'お知らせ一覧',
        titleEn: 'News List',
      },
      {
        path: '/news/campaign',
        title: 'キャンペーンお知らせ',
        titleEn: 'Campaign News',
      },
      {
        path: '/news/system',
        title: 'システムお知らせ',
        titleEn: 'System News',
      },
      {
        path: '/news/info',
        title: '一般お知らせ',
        titleEn: 'General News',
      },
      {
        path: '/news/123',
        title: 'お知らせ詳細（サンプル）',
        titleEn: 'News Details (Sample)',
      },
      {
        path: '/account',
        title: 'アカウント',
        titleEn: 'Account',
      },
      {
        path: '/account/verify_email',
        title: 'メール認証',
        titleEn: 'Email Verification',
      },
    ],
  },
];

export default function UIDebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            UI デバッグページ
            <span className="block text-lg font-medium text-gray-600">
              UI Debug Page
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-1">
            開発中のページ一覧
          </p>
          <p className="text-sm text-gray-500">
            List of Pages Under Development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-blue-500 px-6 py-4">
                <h2 className="text-xl font-semibold text-white mb-1">
                  {category.category}
                </h2>
                <p className="text-sm text-blue-100">
                  {category.categoryEn}
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                {category.items.map((page, index) => (
                  <Link
                    key={index}
                    href={page.path}
                    className="block hover:bg-gray-50 transition-colors duration-150"
                  >
                    <div className="px-6 py-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {page.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-0.5">
                            {page.titleEn}
                          </p>
                          <p className="text-sm text-blue-500 mt-1">
                            {page.path}
                          </p>
                        </div>
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-1">
            このページは開発用です
          </p>
          <p className="text-xs text-gray-400">
            This page is for development purposes
          </p>
        </div>
      </div>
    </div>
  );
}
