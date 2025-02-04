'use client';

import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { IntegrationCodeForm } from '@/components/settings/IntegrationCodeForm';
import { SettingsNav } from '@/components/settings/SettingsNav';

export default function CreateIntegrationCodePage() {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    // TODO: API呼び出し
    console.log('Form submitted:', {
      codeName: formData.get('codeName'),
      code: formData.get('code'),
      description: formData.get('description'),
      useSection: formData.get('useSection'),
      section: formData.get('section'),
      fields: formData.get('fields'),
    });
    router.push('/settings/codes');
  };

  const handleCancel = () => {
    router.push('/settings/codes');
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">設定</h1>
              <p className="mt-1 text-sm text-gray-500">
                アプリケーションの設定を管理します。
              </p>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
              {/* サイドナビゲーション */}
              <div className="col-span-12 sm:col-span-3">
                <SettingsNav />
              </div>

              {/* メインコンテンツ */}
              <div className="col-span-12 sm:col-span-9">
                <IntegrationCodeForm
                  mode="create"
                  onSubmit={handleSubmit}
                  onCancel={handleCancel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
