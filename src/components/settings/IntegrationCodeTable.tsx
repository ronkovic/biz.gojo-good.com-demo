'use client';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { ClipboardIcon } from '@heroicons/react/24/outline';

interface IntegrationCode {
  id: string;
  name: string;
  code: string;
  section?: string;
  memberCount: number;
  lastUpdated: string;
}

interface IntegrationCodeTableProps {
  codes: IntegrationCode[];
  onCopy?: (code: string) => void;
  onDelete?: (id: string) => void;
}

export function IntegrationCodeTable({
  codes,
  onCopy,
  onDelete,
}: IntegrationCodeTableProps) {
  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'yyyy年MM月dd日', { locale: ja });
  };

  const handleCopy = async (code: string) => {
    if (onCopy) {
      onCopy(code);
    }
    await navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      <div className="px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">全{codes.length}件</span>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            ＋ コードを追加
          </button>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                コード
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                セクション
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                登録数
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                最終更新
              </th>
              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                アクション
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {codes.map((code) => (
              <tr key={code.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {code.name}
                    </div>
                    <div className="flex items-center mt-1">
                      <code className="text-xs text-gray-500">{code.code}</code>
                      <button
                        onClick={() => handleCopy(code.code)}
                        className="ml-2 p-1 hover:bg-gray-100 rounded-full"
                      >
                        <ClipboardIcon className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {code.section ? (
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      所属
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      利用なし
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {code.memberCount}名
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(code.lastUpdated)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="p-2 hover:bg-gray-100 rounded-full">
                      <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400" />
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-gray-50' : ''
                            } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                          >
                            詳細
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
      </div>
    </div>
  );
}
