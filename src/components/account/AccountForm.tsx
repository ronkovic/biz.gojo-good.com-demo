'use client';

import { useState } from 'react';
import { Avatar } from './Avatar';

interface AccountFormProps {
  initialData?: {
    firstName: string;
    lastName: string;
    email: string;
    role: 'admin' | 'user';
  };
}

export function AccountForm({ initialData }: AccountFormProps) {
  const [formData, setFormData] = useState({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    email: initialData?.email || '',
    role: initialData?.role || 'user',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: APIを呼び出してデータを保存
    console.log('Form submitted:', formData);
  };

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
      <div className="px-4 sm:px-0 space-y-8">
        {/* アバター */}
        <div>
          <Avatar name={formData.firstName || '山'} />
          <button
            type="button"
            className="mt-4 text-sm text-blue-600 hover:text-blue-500 flex items-center gap-x-1"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885l9.416-9.416a2.5 2.5 0 00-3.536-3.536L3.58 13.42a4 4 0 00-.885 1.343z" />
            </svg>
            画像を変更
          </button>
        </div>

        {/* メールアドレス */}
        <div>
          <dt className="text-sm font-medium text-gray-500">メールアドレス</dt>
          <div className="mt-1 flex items-center justify-between">
            <dd className="text-sm text-gray-900">{formData.email}</dd>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-500 flex items-center gap-x-1"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885l9.416-9.416a2.5 2.5 0 00-3.536-3.536L3.58 13.42a4 4 0 00-.885 1.343z" />
              </svg>
              変更
            </button>
          </div>
        </div>

        {/* パスワード */}
        <div>
          <dt className="text-sm font-medium text-gray-500">パスワード</dt>
          <div className="mt-1 flex items-center justify-between">
            <dd className="text-sm text-gray-900">••••••••••••</dd>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-500 flex items-center gap-x-1"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885l9.416-9.416a2.5 2.5 0 00-3.536-3.536L3.58 13.42a4 4 0 00-.885 1.343z" />
              </svg>
              変更
            </button>
          </div>
        </div>

        {/* 2要素認証 */}
        <div>
          <dt className="text-sm font-medium text-gray-500">2要素認証</dt>
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
              <dd className="text-sm text-gray-900">無効</dd>
            </div>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              2要素認証を設定
            </button>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
      >
        <div className="px-4 py-6 sm:p-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <span className="text-red-500">*</span> 姓
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <span className="text-red-500">*</span> 名
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                <span className="text-red-500">*</span> 権限
              </label>
              <p className="text-sm text-gray-500 mb-4">
                権限の変更は、管理者のみが行うことができます。一般ユーザーの場合は、管理者に問い合わせてください。
              </p>
              <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={formData.role === 'admin'}
                    onChange={(e) =>
                      setFormData({ ...formData, role: 'admin' as const })
                    }
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label
                    htmlFor="role-admin"
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    管理者
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={formData.role === 'user'}
                    onChange={(e) =>
                      setFormData({ ...formData, role: 'user' as const })
                    }
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label
                    htmlFor="role-user"
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >
                    一般ユーザー
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            保存
          </button>
        </div>
      </form>
    </div>
  );
}
