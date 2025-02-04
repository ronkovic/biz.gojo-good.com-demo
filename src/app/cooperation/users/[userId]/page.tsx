'use client';

import { useParams } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

// ダミーデータを生成する関数
const getUserData = (userId: string) => ({
  id: userId,
  name: userId === '1' ? 'YURI' : userId === '2' ? 'ユーザー名' : userId === '3' ? 'みみちゃん' : userId === '4' ? 'ナカジマ' : userId === '5' ? '名もなき支援者' : userId === '6' ? 'ハナコ' : 'ユーザー名',
  avatar: `https://picsum.photos/200/200?random=${userId}`,
  organization: '株式会社トライアウス',
  department: userId === '4' ? 'リアライズ株式会社 営業部' : userId === '6' ? 'NPO事業部' : userId === '5' ? '開発部' : '法人事業部',
  age: userId === '6' ? '30代' : undefined,
  gender: userId === '6' ? '女性' : undefined,
  location: userId === '6' ? '神奈川県藤沢市' : undefined,
  totalAmount: 245000,
  donationCount: 148,
  donationHistory: Array(6).fill(null).map((_, j) => ({
    organization: 'ジャパンビジョン',
    category: '災害復興',
    subCategory: '国際協力',
    amount: 400,
    date: '2024-10-30T20:30:30',
  })),
});

export default function UserDetailPage() {
  const params = useParams();
  const userId = params.userId as string;
  const user = getUserData(userId);

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center space-x-4">
            <Link
              href="/cooperation/users"
              className="text-blue-600 hover:text-blue-900"
            >
              ← 企業連携ユーザー一覧に戻る
            </Link>
          </div>
          <div className="mt-6">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-6">
                    <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
                    <p className="mt-1 text-sm text-gray-500">
                      {user.organization} / {user.department}
                    </p>
                    {(user.age || user.gender || user.location) && (
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                        {user.age && user.gender && (
                          <span>{user.age}代{user.gender}</span>
                        )}
                        {user.location && <span>📍 {user.location}</span>}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">寄付実績</h3>
                    <dl className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm text-gray-500">総寄付額</dt>
                        <dd className="mt-1 text-2xl font-semibold text-gray-900">
                          {user.totalAmount.toLocaleString()}円
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-500">寄付回数</dt>
                        <dd className="mt-1 text-2xl font-semibold text-gray-900">
                          {user.donationCount.toLocaleString()}回
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900">寄付履歴</h3>
                  <div className="mt-4 space-y-4">
                    {user.donationHistory.map((donation, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">
                              {donation.organization}
                            </div>
                            <div className="mt-1 text-sm text-gray-500">
                              {donation.category} / {donation.subCategory}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-900">
                              {donation.amount.toLocaleString()}円
                            </div>
                            <div className="mt-1 text-sm text-gray-500">
                              {formatDate(donation.date)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
