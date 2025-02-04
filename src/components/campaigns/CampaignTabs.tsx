'use client';

interface CampaignTabsProps {
  activeTab: 'list' | 'report';
  onTabChange: (tab: 'list' | 'report') => void;
}

export const CampaignTabs = ({ activeTab, onTabChange }: CampaignTabsProps) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => onTabChange('list')}
          className={`
            py-4 px-1 border-b-2 font-medium text-sm
            ${
              activeTab === 'list'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }
          `}
        >
          キャンペーン一覧
        </button>
        <button
          onClick={() => onTabChange('report')}
          className={`
            py-4 px-1 border-b-2 font-medium text-sm
            ${
              activeTab === 'report'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }
          `}
        >
          レポート
        </button>
      </nav>
    </div>
  );
};
