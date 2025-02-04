'use client';

interface OrgFiltersProps {
  onSearch: (query: string) => void;
}

export function OrgFilters({ onSearch }: OrgFiltersProps) {
  const categories = [
    { id: 'children', label: '子ども' },
    { id: 'women', label: '女性支援' },
    { id: 'youth', label: '若者支援' },
    { id: 'animal', label: 'どうぶつ' },
    { id: 'education', label: '教育・学び' },
    { id: 'disaster', label: '災害' },
    { id: 'medical', label: '医療・福祉' },
    { id: 'international', label: '国際協力' },
    { id: 'community', label: '地域活性' },
    { id: 'sports', label: 'スポーツ' },
    { id: 'culture', label: '文化・芸術' },
    { id: 'peace', label: '人権・平和' },
    { id: 'environment', label: '自然・環境' },
    { id: 'support', label: '中間支援' },
    { id: 'other', label: 'その他' },
  ];

  const orgTypes = [
    { id: 'specified-with', label: '特定非営利活動法人（認定・特例認定）' },
    { id: 'specified-without', label: '特定非営利活動法人（認定なし）' },
    { id: 'public-interest', label: '公益社団法人' },
    { id: 'general-incorporated', label: '一般社団法人' },
    { id: 'public-foundation', label: '公益財団法人' },
    { id: 'general-foundation', label: '一般財団法人' },
    { id: 'social-welfare', label: '社会福祉法人' },
  ];

  const others = [
    { id: 'bookmarked', label: 'ブックマーク中' },
    { id: 'memo', label: 'メモあり' },
    { id: 'donation', label: '寄付金控除対象' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="団体名、活動など"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
          登録が新しい順 ▼
        </button>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">カテゴリー</h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-700">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">団体の種類</h3>
        <div className="space-y-2">
          {orgTypes.map((type) => (
            <label key={type.id} className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-700">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">その他</h3>
        <div className="space-y-2">
          {others.map((other) => (
            <label key={other.id} className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-700">{other.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
