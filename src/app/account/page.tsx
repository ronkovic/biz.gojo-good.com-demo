'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { PageHeader } from '@/components/common/PageHeader';
import { AccountForm } from '@/components/account/AccountForm';

const dummyUser = {
  firstName: '山田',
  lastName: '太郎',
  email: 't.yamada@congrant.com',
  role: 'admin' as const,
};

export default function AccountPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="アカウント情報"
        description="アカウントの基本設定を行います。"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <AccountForm initialData={dummyUser} />
        </div>
      </div>
    </DashboardLayout>
  );
}