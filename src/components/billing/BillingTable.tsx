'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

interface BillingItem {
  id: string;
  invoiceNumber: string;
  plan: string;
  periodStart: string;
  periodEnd: string;
  amount: number;
  pdfUrl: string;
}

interface BillingTableProps {
  items: BillingItem[];
  onDownload?: (item: BillingItem) => void;
}

export function BillingTable({ items, onDownload }: BillingTableProps) {
  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'yyyy年MM月dd日', { locale: ja });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('ja-JP').format(amount) + '円';
  };

  const handleDownload = (item: BillingItem) => {
    if (onDownload) {
      onDownload(item);
    }
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      <div className="px-4 py-6 sm:px-6">
        <div className="text-sm text-gray-500">全{items.length}件</div>
      </div>
      <div className="border-t border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                請求書
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                プラン
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                契約期間
              </th>
              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                請求額
              </th>
              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="sr-only">ダウンロード</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src="/pdf-icon.svg"
                      alt="PDF"
                      className="h-5 w-5 mr-2"
                    />
                    <span className="text-sm text-gray-900">
                      {item.invoiceNumber}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.plan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(item.periodStart)} 〜 {formatDate(item.periodEnd)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatAmount(item.amount)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDownload(item)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <ArrowDownTrayIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
