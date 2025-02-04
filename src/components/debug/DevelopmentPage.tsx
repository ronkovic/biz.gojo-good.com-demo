'use client';

interface DevelopmentPageProps {
  title: string;
  description?: string;
  path: string;
  parameters?: { [key: string]: string };
}

export const DevelopmentPage = ({
  title,
  description,
  path,
  parameters = {}
}: DevelopmentPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">ページ情報</h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">パス：</span>
                <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm">{path}</code>
              </div>
              {Object.keys(parameters).length > 0 && (
                <div>
                  <span className="text-sm font-medium text-gray-500">パラメータ：</span>
                  <div className="mt-2 space-y-2">
                    {Object.entries(parameters).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <code className="px-2 py-1 bg-gray-100 rounded text-sm">{key}</code>
                        <span className="text-gray-400">:</span>
                        <code className="px-2 py-1 bg-gray-100 rounded text-sm">{value}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-blue-900 mb-4">開発ステータス</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="text-gray-600">開発初期段階</span>
              </div>
              <p className="text-sm text-gray-500">
                このページは現在開発中です。実装が完了するまでこの開発用ページが表示されます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
