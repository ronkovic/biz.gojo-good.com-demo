'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { HomeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

// パスに基づいてページタイトルを取得する関数
const getPageTitle = (pathname: string): { title: string; titleEn: string } => {
  const paths: { [key: string]: { title: string; titleEn: string } } = {
    '/home': { title: '全体レポート', titleEn: 'Overall Report' },
    '/campaigns': { title: 'キャンペーン', titleEn: 'Campaigns' },
    '/cooperation/users': { title: '企業連携ユーザー', titleEn: 'Cooperators' },
    '/orgs': { title: 'GOJO構成団体', titleEn: 'Organizations' },
    '/users': { title: '管理ユーザー', titleEn: 'Users' },
    '/settings/general': { title: '設定', titleEn: 'Settings' },
    '/news': { title: 'お知らせ', titleEn: 'News' },
  };

  return paths[pathname] || { title: '', titleEn: '' };
};

export const Header = () => {
  const pathname = usePathname();
  const { title } = getPageTitle(pathname);

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 z-40">
      <div className="h-full flex items-center px-4">
        <div className="flex items-center text-gray-600">
          <HomeIcon className="h-5 w-5 mr-2" />
          <span>{title}</span>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <QuestionMarkCircleIcon className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <div className="mr-3 text-right">
              <div className="text-sm font-medium text-gray-900">山田 太郎</div>
              <div className="text-xs text-gray-500">管理者</div>
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Image
                src="https://picsum.photos/64/64"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
