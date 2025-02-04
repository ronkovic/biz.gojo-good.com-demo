'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface TwoFactorSettingsFormProps {
  initialEnabled?: boolean;
  onSubmit?: (enabled: boolean) => Promise<void>;
}

export function TwoFactorSettingsForm({
  initialEnabled = false,
  onSubmit,
}: TwoFactorSettingsFormProps) {
  const [enabled, setEnabled] = useState(initialEnabled);

  const handleChange = async (newEnabled: boolean) => {
    setEnabled(newEnabled);
    if (onSubmit) {
      await onSubmit(newEnabled);
    }
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      <div className="px-4 py-6 sm:p-8">
        <div className="max-w-2xl space-y-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              二要素認証
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              二要素認証の設定を管理します。
            </p>
          </div>

          {enabled ? (
            <div className="rounded-md bg-yellow-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    二要素認証が有効です
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      二要素認証を無効にすると、セキュリティが低下する可能性があります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    二要素認証が無効です
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      二要素認証を有効にすると、アカウントのセキュリティが向上します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium leading-6 text-gray-900">
                二要素認証を利用する
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                ログイン時に認証コードの入力が必要になります。
              </p>
            </div>
            <Switch
              checked={enabled}
              onChange={handleChange}
              className={clsx(
                enabled ? 'bg-blue-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
              )}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>

          {enabled && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="recoveryEmail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  リカバリーメールアドレス
                  <span className="ml-1 text-red-500">必須</span>
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="recoveryEmail"
                    id="recoveryEmail"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="example@example.com"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  二要素認証が利用できない場合のバックアップとして使用します。
                </p>
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  電話番号
                  <span className="ml-1 text-red-500">必須</span>
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="090-1234-5678"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  認証コードを受け取るために使用します。
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
