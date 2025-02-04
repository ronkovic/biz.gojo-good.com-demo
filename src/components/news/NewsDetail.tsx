'use client';

import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { NewsItem } from './NewsList';

interface NewsDetailProps {
  item: NewsItem;
  content: string;
}

export function NewsDetail({ item, content }: NewsDetailProps) {
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
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      <div className="px-4 py-6 sm:px-6">
        <div className="flex items-center gap-x-3">
          <Link
            href="/news"
            className="inline-flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            一覧へ戻る
          </Link>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-x-3">
            <p className="text-sm text-gray-500">{item.date}</p>
            <span
              className={`${getCategoryStyle(
                item.category
              )} inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset`}
            >
              {getCategoryLabel(item.category)}
            </span>
          </div>
          <h1 className="mt-3 text-xl font-semibold text-gray-900">
            {item.title}
          </h1>
        </div>
      </div>
      <div className="px-4 py-6 sm:px-6">
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
