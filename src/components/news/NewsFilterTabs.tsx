'use client';

import clsx from 'clsx';
import Link from 'next/link';

interface FilterTab {
  id: string;
  name: string;
  count?: number;
}

interface NewsFilterTabsProps {
  tabs: FilterTab[];
  currentTab: string;
}

export function NewsFilterTabs({ tabs, currentTab }: NewsFilterTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`/news?tab=${tab.id}`}
            className={clsx(
              tab.id === currentTab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
            )}
          >
            {tab.name}
            {tab.count !== undefined && (
              <span
                className={clsx(
                  tab.id === currentTab
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-900',
                  'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                )}
              >
                {tab.count}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
