'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navigation = [
  { name: '表示設定', href: '/settings/general' },
  { name: '連携コード設定', href: '/settings/integration' },
  { name: '初回ポーナス設定', href: '/settings/bonus' },
  { name: '二要素認証', href: '/settings/2fa' },
];

export function SettingsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col" aria-label="サイドナビゲーション">
      <ul role="list" className="flex flex-1 flex-col gap-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                pathname === item.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
