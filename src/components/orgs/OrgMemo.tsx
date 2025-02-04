'use client';

import { useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface OrgMemoProps {
  initialMemo?: string;
  onSave?: (memo: string) => void;
}

export function OrgMemo({ initialMemo = '', onSave }: OrgMemoProps) {
  const [memo, setMemo] = useState(initialMemo);

  const handleSave = () => {
    if (onSave) {
      onSave(memo);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-medium text-gray-900">メモ</h3>
          <button className="text-gray-400 hover:text-gray-500">
            <QuestionMarkCircleIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <textarea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="入力テキスト"
          className="w-full h-24 text-[13px] text-gray-700 placeholder-gray-400 border-0 focus:ring-0 resize-none"
        />
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right rounded-b-lg">
        <button
          onClick={handleSave}
          className="text-[13px] text-blue-600 hover:text-blue-500 font-medium"
        >
          メモを保存
        </button>
      </div>
    </div>
  );
}
