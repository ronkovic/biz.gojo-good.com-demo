'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { InformationCircleIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface Field {
  id: string;
  name: string;
}

interface IntegrationCodeFormProps {
  mode: 'create' | 'edit';
  initialData?: {
    codeName?: string;
    code?: string;
    description?: string;
    useSection?: boolean;
    section?: string;
    fields?: Field[];
  };
  onSubmit: (data: FormData) => Promise<void>;
  onCancel: () => void;
}

export function IntegrationCodeForm({
  mode,
  initialData,
  onSubmit,
  onCancel,
}: IntegrationCodeFormProps) {
  const [useSection, setUseSection] = useState(initialData?.useSection ?? false);
  const [fields, setFields] = useState<Field[]>(initialData?.fields ?? []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('useSection', useSection.toString());
    formData.append('fields', JSON.stringify(fields));
    await onSubmit(formData);
  };

  const addField = () => {
    const newField = {
      id: `field-${fields.length + 1}`,
      name: '',
    };
    setFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const updateField = (id: string, name: string) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, name } : field
      )
    );
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      <div className="px-4 py-6 sm:p-8">
        <div className="max-w-2xl space-y-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              連携コード設定
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              従業員を紐づけるためのコードを設定します。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="codeName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  コード名
                  <span className="ml-1 text-red-500">必須</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="codeName"
                    id="codeName"
                    defaultValue={initialData?.codeName}
                    placeholder="例：従業員向け"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  コード
                  <span className="ml-1 text-red-500">必須</span>
                  <span className="ml-1 text-sm text-gray-500">英数字8文字以上</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="code"
                    id="code"
                    defaultValue={initialData?.code}
                    placeholder="aaa123456emp"
                    required
                    minLength={8}
                    pattern="[a-zA-Z0-9]+"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  説明文
                </label>
                <div className="mt-1">
                  <textarea
                    name="description"
                    id="description"
                    rows={3}
                    defaultValue={initialData?.description}
                    placeholder="従業員のみ利用できます。"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
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
                      セクション利用をONにすると、所属などのカテゴリーを選択枠（フィールド）として登録することができます。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="useSection"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    セクション利用
                  </label>
                  <Switch
                    checked={useSection}
                    onChange={setUseSection}
                    className={clsx(
                      useSection ? 'bg-blue-600' : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        useSection ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>

                {useSection && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label
                        htmlFor="section"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        セクション
                        <span className="ml-1 text-red-500">必須</span>
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="section"
                          id="section"
                          defaultValue={initialData?.section}
                          placeholder="例：所属"
                          required={useSection}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        フィールド
                      </label>
                      <div className="mt-2 space-y-2">
                        {fields.map((field) => (
                          <div key={field.id} className="flex items-center gap-2">
                            <span className="text-gray-500">≡</span>
                            <input
                              type="text"
                              value={field.name}
                              onChange={(e) =>
                                updateField(field.id, e.target.value)
                              }
                              placeholder="フィールド"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                            <button
                              type="button"
                              onClick={() => removeField(field.id)}
                              className="p-2 text-gray-400 hover:text-gray-500"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={addField}
                          className="text-sm text-blue-600 hover:text-blue-500"
                        >
                          + 選択枠を追加
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-medium leading-6 text-gray-900">
                  プレビュー
                </h3>
                <div className="mt-2 rounded-lg bg-gray-50 p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                        1
                      </span>
                      <span className="text-sm text-gray-600">コード</span>
                      <span className="text-sm text-gray-900">
                        {initialData?.code || 'aaa123456emp'}
                      </span>
                    </div>
                    {useSection && (
                      <>
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                            2
                          </span>
                          <span className="text-sm text-gray-600">
                            セクション名
                          </span>
                          <span className="text-sm text-gray-900">
                            {initialData?.section || '所属'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                            3
                          </span>
                          <span className="text-sm text-gray-600">選択枠</span>
                          <span className="text-sm text-gray-900">
                            {fields.length > 0
                              ? fields.map((f) => f.name).join(', ')
                              : '選択してください'}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
