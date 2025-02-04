'use client';

import Image from 'next/image';
import { EllipsisHorizontalIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  registeredAt: string;
  avatarUrl?: string;
  initial?: string;
  color?: string;
}

interface UserTableProps {
  users: User[];
  onDelete?: (userId: string) => void;
}

export function UserTable({ users, onDelete }: UserTableProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return format(date, 'yyyy年MM月dd日\nHH:mm:ss', { locale: ja });
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between py-4 px-6">
        <span className="text-sm text-gray-500">全{users.length}件</span>
        <div className="relative">
          <input
            type="text"
            placeholder="氏名、メールアドレスなど"
            className="w-64 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="w-12 px-6 py-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500">
              管理ユーザー
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500">
              ロール
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500">
              直近のログイン
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500">
              登録日
            </th>
            <th scope="col" className="w-12 px-6 py-3">
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {user.avatarUrl ? (
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image
                        src={user.avatarUrl}
                        alt={user.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${user.color || 'bg-blue-500'}`}
                    >
                      {user.initial || user.name[0]}
                    </div>
                  )}
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-pre text-sm text-gray-500">
                {formatDate(user.lastLogin)}
              </td>
              <td className="px-6 py-4 whitespace-pre text-sm text-gray-500">
                {formatDate(user.registeredAt)}
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium">
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="p-1 rounded-full hover:bg-gray-100">
                    <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => onDelete?.(user.id)}
                          className={`${
                            active ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                          } group flex w-full items-center px-4 py-2 text-sm`}
                        >
                          <TrashIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                          削除
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between px-6 py-3 bg-white border-t border-gray-200">
        <div className="text-sm text-gray-700">
          全{users.length}件
        </div>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 text-sm ${
                page === 1
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-50'
              } rounded`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
