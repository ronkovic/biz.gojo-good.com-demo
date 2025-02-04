'use client';

import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface BonusSettingsFormProps {
  initialPoints?: number;
  onSubmit?: (points: number) => Promise<void>;
}

export function BonusSettingsForm({
  initialPoints = 2500,
  onSubmit,
}: BonusSettingsFormProps) {
  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      <div className="px-4 py-6 sm:p-8">
        <div className="max-w-2xl space-y-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              初回ボーナス
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              連携ユーザーに付与される初回ボーナスポイントを管理します。
            </p>
          </div>

          <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <InformationCircleIcon
                  className="h-5 w-5 text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  こちらの初回ボーナスを変更することはできません。変更したい場合は、GOJO運営担当者へご連絡ください。
                </p>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="points"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              初回に付与されるGOJOポイント
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                <input
                  type="text"
                  name="points"
                  id="points"
                  value={`${initialPoints}pt`}
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
