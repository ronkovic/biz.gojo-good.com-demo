'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  HomeIcon,
  FlagIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  UsersIcon,
  Cog6ToothIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline';

const menuItems = [
  { path: '/home', icon: HomeIcon, label: 'ホーム', labelEn: 'Home' },
  { path: '/campaigns', icon: FlagIcon, label: 'キャンペーン', labelEn: 'Campaigns', hasSubmenu: true },
  { path: '/cooperation/users', icon: UserGroupIcon, label: '企業連携ユーザー', labelEn: 'Cooperators', hasSubmenu: true },
  { path: '/orgs', icon: BuildingOfficeIcon, label: 'GOJO構成団体', labelEn: 'Organizations' },
  { path: '/users', icon: UsersIcon, label: '管理ユーザー', labelEn: 'Users' },
  { path: '/settings/general', icon: Cog6ToothIcon, label: '設定', labelEn: 'Settings' },
  { path: '/news', icon: BellIcon, label: 'お知らせ', labelEn: 'News' },
  { path: '/help', icon: QuestionMarkCircleIcon, label: 'お問い合わせ', labelEn: 'Help' },
];

const isSettingsPath = (path: string) => {
  return path.startsWith('/settings/');
};

const isOrgsPath = (path: string) => {
  return path.startsWith('/orgs');
};

const isCampaignsPath = (path: string) => {
  return path.startsWith('/campaigns');
};

export const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/settings/general') {
      return isSettingsPath(pathname);
    } else if (path === '/orgs') {
      return isOrgsPath(pathname);
    } else if (path === '/campaigns') {
      return isCampaignsPath(pathname);
    }
    return pathname === path;
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50">
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <Image
          src="https://picsum.photos/120/40"
          alt="GOJO Logo"
          width={120}
          height={40}
          className="dark:invert"
          priority
        />
        <button className="ml-auto">
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-4 py-3 text-sm ${
              isActive(item.path)
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
            {item.hasSubmenu && (
              <svg
                className="ml-auto h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};
