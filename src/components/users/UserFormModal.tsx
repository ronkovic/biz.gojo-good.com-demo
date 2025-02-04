'use client';

import { Dialog, RadioGroup } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface User {
  id?: string;
  name?: string;
  email?: string;
  role?: 'admin' | 'user';
  avatarUrl?: string;
  initial?: string;
  color?: string;
}

interface UserFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email?: string; role?: string }) => void;
  mode: 'create' | 'edit';
  user?: User;
}

export function UserFormModal({
  isOpen,
  onClose,
  onSubmit,
  mode,
  user,
}: UserFormModalProps) {
  const title = mode === 'create' ? '管理ユーザーを招待' : '管理ユーザーの編集';
  const buttonText = mode === 'create' ? '招待メールを送信' : '変更を保存';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit({
      email: formData.get('email') as string,
      role: formData.get('role') as string,
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="relative">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <Dialog.Title className="text-base font-semibold text-gray-900">
                {title}
              </Dialog.Title>
              <button
                onClick={onClose}
                className="rounded-full p-1 hover:bg-gray-100"
              >
                <XMarkIcon className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4">
              {mode === 'edit' && user && (
                <div className="mb-6 flex items-center space-x-3">
                  {user.avatarUrl ? (
                    <div className="relative h-10 w-10">
                      <Image
                        src={user.avatarUrl}
                        alt={user.name || ''}
                        fill
                        className="rounded-full"
                      />
                    </div>
                  ) : (
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                        user.color || 'bg-blue-500'
                      }`}
                    >
                      {user.initial || user.name?.[0]}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              )}

              {mode === 'create' && (
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    招待メールアドレス
                    <span className="ml-1 text-red-500">必須</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="メールアドレスを入力"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  権限
                  <span className="ml-1 text-red-500">必須</span>
                </label>
                <RadioGroup name="role" defaultValue={user?.role || 'admin'}>
                  <div className="space-y-3">
                    <RadioGroup.Option value="admin">
                      {({ checked }) => (
                        <div
                          className={`${
                            checked ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                          } relative flex cursor-pointer rounded-lg border p-3 focus:outline-none`}
                        >
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium ${
                                    checked ? 'text-blue-900' : 'text-gray-900'
                                  }`}
                                >
                                  管理者
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-blue-500">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </RadioGroup.Option>

                    <RadioGroup.Option value="user">
                      {({ checked }) => (
                        <div
                          className={`${
                            checked ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                          } relative flex cursor-pointer rounded-lg border p-3 focus:outline-none`}
                        >
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium ${
                                    checked ? 'text-blue-900' : 'text-gray-900'
                                  }`}
                                >
                                  一般ユーザー
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-blue-500">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </RadioGroup.Option>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
