import Link from 'next/link';

const pages = [
  {
    path: '/login',
    description: 'ログインページ',
    category: '認証関連',
  },
  {
    path: '/login/2fa',
    description: '2要素認証ページ',
    category: '認証関連',
  },
  {
    path: '/login/forgot_password',
    description: 'パスワード再発行ページ',
    category: '認証関連',
  },
  {
    path: '/login/reset_password',
    description: 'パスワード再設定ページ',
    category: '認証関連',
  },
  {
    path: '/touroku',
    description: 'ユーザー登録ページ',
    category: '認証関連',
  },
];

export default function UIDebugPage() {
  // カテゴリーでページをグループ化
  const groupedPages = pages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, typeof pages>);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            UI デバッグページ
          </h1>
          <p className="text-gray-600">
            実装済みのページ一覧
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedPages).map(([category, categoryPages]) => (
            <div key={category} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  {category}
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {categoryPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.path}
                    className="block p-4 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {page.description}
                        </h3>
                        <p className="text-sm text-blue-500">
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
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          このページは開発用です
        </div>
      </div>
    </div>
  );
}
