'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { UserTable } from '@/components/users/UserTable';
import { PlusIcon } from '@heroicons/react/24/outline';

// ダミーデータ
const dummyUsers = [
  {
    id: '1',
    name: '山田 太郎',
    email: 't.yamada@congrant.com',
    role: '管理者',
    lastLogin: '2024-10-30T20:30:30',
    registeredAt: '2024-10-30T20:30:30',
    initial: '山',
    color: 'bg-red-500',
  },
  {
    id: '2',
    name: '木村 裕太',
    email: 'y.kimura@congrant.com',
    role: '管理者',
    lastLogin: '2024-10-30T20:30:30',
    registeredAt: '2024-10-30T20:30:30',
    initial: '木',
    color: 'bg-blue-500',
  },
  {
    id: '3',
    name: '大西 晃',
    email: 'a.onuki@congrant.com',
    role: '管理者',
    lastLogin: '2024-10-30T20:30:30',
    registeredAt: '2024-10-30T20:30:30',
    avatarUrl: 'https://picsum.photos/32/32?random=3',
  },
  {
    id: '4',
    name: '水田 健二',
    email: 'k.mizuta@congrant.com',
    role: '管理者',
    lastLogin: '2024-10-30T20:30:30',
    registeredAt: '2024-10-30T20:30:30',
    avatarUrl: 'https://picsum.photos/32/32?random=4',
  },
  {
    id: '5',
    name: '朝日 夏実子',
    email: 'k.asahi@congrant.com',
    role: '管理者',
    lastLogin: '2024-10-30T20:30:30',
    registeredAt: '2024-10-30T20:30:30',
    avatarUrl: 'https://picsum.photos/32/32?random=5',
  },
  {
    id: '6',
    name: '河本 明日香',
    email: 'a.kawamoto@congrant.com',
    role: '管理者',
    lastLogin: '2024-10-30T20:30:30',
    registeredAt: '2024-10-30T20:30:30',
    initial: '河',
    color: 'bg-green-500',
  },
];

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-semibold text-gray-900">管理ユーザー</h1>
                <p className="mt-1 text-sm text-gray-500">
                  管理画面を利用するユーザーのアカウント・権限を管理します。
                </p>
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <PlusIcon className="h-5 w-5 mr-1.5" />
                ユーザー招待
              </button>
            </div>

            <div className="mt-6">
              <UserTable
                users={dummyUsers}
                onDelete={(userId) => {
                  console.log('Delete user:', userId);
                  // TODO: 削除処理
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}