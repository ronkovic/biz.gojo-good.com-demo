'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { BookmarkIcon } from '@heroicons/react/24/outline';

interface OrgCardProps {
  name: string;
  type: string;
  category: string;
  imageUrl: string;
  logoUrl: string;
}

export function OrgCard({ name, type, category, imageUrl, logoUrl }: OrgCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
          <BookmarkIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="relative h-8 w-8">
            <Image
              src={logoUrl}
              alt={`${name}のロゴ`}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-xs text-gray-500">{type}</p>
            <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
            {category}
          </span>
          <button className="text-xs text-blue-600 hover:text-blue-700">
            もっと見る
          </button>
        </div>
      </div>
    </Card>
  );
}
