'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PhotoIcon } from '@heroicons/react/24/outline';

interface GeneralSettingsFormProps {
  initialData?: {
    companyName: string;
    logo?: string;
  };
  onSubmit: (data: FormData) => Promise<void>;
}

export function GeneralSettingsForm({ initialData, onSubmit }: GeneralSettingsFormProps) {
  const [previewLogo, setPreviewLogo] = useState<string | null>(initialData?.logo || null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await onSubmit(formData);
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      <div className="px-4 py-6 sm:p-8">
        <div className="max-w-2xl space-y-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">表示設定</h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              GOJOアプリに表示される企業情報を設定します。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                表示企業名
                <span className="ml-1 text-red-500">必須</span>
                <p className="mt-1 text-xs text-gray-500">45文字以内</p>
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  defaultValue={initialData?.companyName}
                  maxLength={45}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
              <label
                htmlFor="logo"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                企業ロゴ
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div
                  className={`flex justify-center rounded-lg border border-dashed px-6 py-10 ${
                    isDragging ? 'border-blue-600 bg-blue-50' : 'border-gray-900/25'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="text-center">
                    {previewLogo ? (
                      <div className="relative mx-auto h-40 w-40">
                        <Image
                          src={previewLogo}
                          alt="企業ロゴ"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mt-4 flex flex-col items-center text-sm leading-6 text-gray-600">
                      <p>画像をドラッグ＆ドロップ または</p>
                      <label
                        htmlFor="file-upload"
                        className="relative mt-2 cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                      >
                        <span>ファイルを選択</span>
                        <input
                          id="file-upload"
                          name="logo"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <p className="text-xs leading-5 text-gray-600 mt-2">
                      推奨サイズ 240px×240px以上
                    </p>
                    <p className="text-xs leading-5 text-gray-600">
                      推奨縦横比 1:1
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
