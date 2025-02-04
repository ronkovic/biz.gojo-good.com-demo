'use client';

import { Tab } from '@headlessui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface OrgBasicDataProps {
  org: {
    name: string;
    type: string;
    representative: string;
    address: string;
    established: string;
    staffCount: string;
    website: string;
    socialAccounts: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
    donationAmount: number;
    donationCount: number;
    description: string;
    categories: string[];
  };
}

// ダミーデータ
const donationData = Array.from({ length: 12 }, (_, i) => ({
  date: `2024-${String(i + 1).padStart(2, '0')}`,
  value: Math.floor(Math.random() * 1000000) + 500000,
}));

export function OrgBasicData({ org }: OrgBasicDataProps) {
  return (
    <Tab.Panel>
      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">実績サマリー</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-gray-500 mb-2">直近1ヶ月の寄付額</h4>
              <p className="text-2xl font-semibold text-gray-900">
                {org.donationAmount.toLocaleString()}円
              </p>
              <div className="mt-1 h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={donationData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-2">直近1ヶ月の寄付件数</h4>
              <p className="text-2xl font-semibold text-gray-900">
                {org.donationCount.toLocaleString()}件
              </p>
              <div className="mt-1 h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={donationData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">活動概要</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{org.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {org.categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {category}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">団体データ</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">団体名</dt>
              <dd className="mt-1 text-sm text-gray-900">{org.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">代表</dt>
              <dd className="mt-1 text-sm text-gray-900">{org.representative}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">本部所在地</dt>
              <dd className="mt-1 text-sm text-gray-900">{org.address}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">設立</dt>
              <dd className="mt-1 text-sm text-gray-900">{org.established}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">スタッフ数</dt>
              <dd className="mt-1 text-sm text-gray-900">{org.staffCount}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">ホームページ</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 flex items-center"
                >
                  {org.website}
                  <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">決算報告書</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <a
              href="#"
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.672 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" />
              </svg>
              2023年度決算報告書
            </a>
          </div>
        </section>
      </div>
    </Tab.Panel>
  );
}
