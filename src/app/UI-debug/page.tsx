import Link from 'next/link';

const pages = [
  {
    category: '認証関連',
    items: [
      {
        path: '/login',
        title: 'ログインページ',
      },
      {
        path: '/login/2fa',
        title: '2要素認証',
      },
      {
        path: '/login/forgot_password',
        title: 'パスワード再発行',
      },
      {
        path: '/login/reset_password',
        title: 'パスワード再設定',
      },
      {
        path: '/touroku',
        title: 'ユーザー登録',
      },
    ],
  },
  {
    category: 'メイン機能',
    items: [
      {
        path: '/home',
        title: 'ホーム',
      },
      {
        path: '/campaigns',
        title: 'キャンペーン一覧',
      },
      {
        path: '/campaigns/123',
        title: 'キャンペーン詳細（サンプル）',
      },
      {
        path: '/campaigns/report',
        title: 'キャンペーンレポート',
      },
    ],
  },
  {
    category: '協力者管理',
    items: [
      {
        path: '/cooperation/users',
        title: '協力者一覧',
      },
      {
        path: '/cooperation/users/123',
        title: '協力者詳細（サンプル）',
      },
      {
        path: '/cooperation/donations',
        title: '寄付一覧',
      },
      {
        path: '/cooperation/report',
        title: '協力者レポート',
      },
    ],
  },
  {
    category: '団体管理',
    items: [
      {
        path: '/orgs',
        title: '団体一覧',
      },
      {
        path: '/orgs/123',
        title: '団体詳細（サンプル）',
      },
      {
        path: '/orgs/123/story',
        title: '団体ストーリー（サンプル）',
      },
      {
        path: '/orgs/123/projects',
        title: '団体プロジェクト（サンプル）',
      },
      {
        path: '/orgs/123/posts',
        title: '団体投稿（サンプル）',
      },
    ],
  },
  {
    category: 'ユーザー管理',
    items: [
      {
        path: '/users',
        title: 'ユーザー一覧',
      },
    ],
  },
  {
    category: '設定',
    items: [
      {
        path: '/settings/general',
        title: '一般設定',
      },
      {
        path: '/settings/codes',
        title: 'コード管理',
      },
      {
        path: '/settings/codes/123',
        title: 'コード詳細（サンプル）',
      },
      {
        path: '/settings/bonus',
        title: 'ボーナス設定',
      },
      {
        path: '/settings/2fa',
        title: '2要素認証設定',
      },
    ],
  },
  {
    category: 'その他',
    items: [
      {
        path: '/billing',
        title: '請求',
      },
      {
        path: '/news',
        title: 'お知らせ一覧',
      },
      {
        path: '/news/campaign',
        title: 'キャンペーンお知らせ',
      },
      {
        path: '/news/system',
        title: 'システムお知らせ',
      },
      {
        path: '/news/info',
        title: '一般お知らせ',
      },
      {
        path: '/news/123',
        title: 'お知らせ詳細（サンプル）',
      },
      {
        path: '/account',
        title: 'アカウント',
      },
      {
        path: '/account/verify_email',
        title: 'メール認証',
      },
    ],
  },
];

export default function UIDebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI デバッグページ
          </h1>
          <p className="text-xl text-gray-600">
            開発中のページ一覧
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-blue-500 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">
                  {category.category}
                </h2>
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

        <div className="mt-12 text-center text-sm text-gray-500">
          このページは開発用です
        </div>
      </div>
    </div>
  );
}
