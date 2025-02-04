'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

interface DonationHistory {
  organization: string;
  category: string;
  subCategory: string;
  amount: number;
  date: string;
}

interface UserDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    id: string;
    name: string;
    avatar: string;
    organization: string;
    department: string;
    age?: string;
    gender?: string;
    location?: string;
    totalAmount: number;
    donationCount: number;
    donationHistory: DonationHistory[];
  } | null;
}

export const UserDetailDialog = ({ isOpen, onClose, user }: UserDetailDialogProps) => {
  if (!user) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="mr-4">
                            <Image
                              src={user.avatar}
                              alt={user.name}
                              width={80}
                              height={80}
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
                            <p className="mt-1 text-sm text-gray-500">
                              {user.organization} / {user.department}
                            </p>
                            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                              {user.age && <span>{user.age}代{user.gender}</span>}
                              {user.location && <span>📍 {user.location}</span>}
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                          onClick={onClose}
                        >
                          <span className="sr-only">閉じる</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-500">寄付額</div>
                          <div className="mt-1 text-2xl font-semibold text-gray-900">
                            {user.totalAmount.toLocaleString()}円
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-500">回数</div>
                          <div className="mt-1 text-2xl font-semibold text-gray-900">
                            {user.donationCount.toLocaleString()}回
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg font-medium text-gray-900">寄付履歴</h3>
                      <div className="mt-4">
                        {user.donationHistory.map((donation, index) => (
                          <div
                            key={index}
                            className="border-t border-gray-200 py-4 first:border-t-0"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900">
                                  {donation.organization}
                                </div>
                                <div className="mt-1 text-sm text-gray-500">
                                  {donation.category} / {donation.subCategory}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  {donation.amount.toLocaleString()}円
                                </div>
                                <div className="mt-1 text-sm text-gray-500">
                                  {formatDate(donation.date)}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
