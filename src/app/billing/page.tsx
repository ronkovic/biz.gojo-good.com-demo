'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BillingTable } from '@/components/billing/BillingTable';

// ダミーデータ
const dummyBillingItems = [
  {
    id: '1',
    invoiceNumber: 'invoice 003',
    plan: 'シルバープラン',
    periodStart: '2026-10-24',
    periodEnd: '2025-10-23',
    amount: 12345678,
    pdfUrl: '/invoices/003.pdf',
  },
  {
    id: '2',
    invoiceNumber: 'invoice 002',
    plan: 'シルバープラン',
    periodStart: '2025-10-24',
    periodEnd: '2025-10-23',
    amount: 12345678,
    pdfUrl: '/invoices/002.pdf',
  },
  {
    id: '3',
    invoiceNumber: 'invoice 001',
    plan: 'シルバープラン',
    periodStart: '2024-10-24',
    periodEnd: '2025-10-23',
    amount: 12345678,
    pdfUrl: '/invoices/001.pdf',
  },
];

export default function BillingPage() {
  const handleDownload = async (item: {
    invoiceNumber: string;
    pdfUrl: string;
  }) => {
    // TODO: PDFのダウンロード処理
    console.log('Download invoice:', item.invoiceNumber, item.pdfUrl);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">契約・請求</h1>
              <p className="mt-1 text-sm text-gray-500">
                現在の契約プランと請求履歴を確認することができます。
                <br />
                プランの変更は、お問い合わせよりGOJO運営担当者へご連絡ください。
              </p>
            </div>

            <div className="mt-6">
              <BillingTable
                items={dummyBillingItems}
                onDownload={handleDownload}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}