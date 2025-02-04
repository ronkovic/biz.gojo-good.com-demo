'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import clsx from 'clsx';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'campaigns' | 'systems' | 'notices';
  url: string;
}

interface NewsListProps {
  items: NewsItem[];
}

export function NewsList({ items }: NewsListProps) {
  const getCategoryLabel = (category: NewsItem['category']) => {
    switch (category) {
      case 'campaigns':
        return 'キャンペーン';
      case 'systems':
        return 'システム';
      case 'notices':
        return 'お知らせ';
    }
  };

  const getCategoryStyle = (category: NewsItem['category']) => {
    switch (category) {
      case 'campaigns':
        return 'bg-orange-50 text-orange-700 ring-orange-600/20';
      case 'systems':
        return 'bg-blue-50 text-blue-700 ring-blue-600/20';
      case 'notices':
        return 'bg-gray-50 text-gray-600 ring-gray-500/20';
    }
  };

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {items.length === 0 ? (
        <div className="py-12">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <svg
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              お知らせはありません。
            </h3>
          </div>
        </div>
      ) : (
        items.map((item) => (
          <li key={item.id}>
            <Link href={item.url} className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <span
                      className={clsx(
                        getCategoryStyle(item.category),
                        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                      )}
                    >
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                </div>
              </div>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}
