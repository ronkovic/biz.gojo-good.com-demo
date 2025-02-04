'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';

interface OrgTabsProps {
  children: React.ReactNode;
}

export function OrgTabs({ children }: OrgTabsProps) {
  const tabs = [
    { name: '基本データ', href: '#basic' },
    { name: 'ストーリー', href: '#story' },
    { name: 'プロジェクト', href: '#projects' },
    { name: 'ポスト', href: '#posts' },
  ];

  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex space-x-1 border-b border-gray-200">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                cn(
                  'px-4 py-2 text-sm font-medium outline-none',
                  selected
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {children}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
