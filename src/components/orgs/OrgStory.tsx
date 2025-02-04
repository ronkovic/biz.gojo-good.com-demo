'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';

interface Story {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  tag: string;
}

interface OrgStoryProps {
  stories: Story[];
}

export function OrgStory({ stories }: OrgStoryProps) {
  return (
    <Tab.Panel>
      <div className="space-y-12">
        {stories.map((story) => (
          <article key={story.id} className="space-y-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src={story.imageUrl}
                alt={story.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  {story.tag}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {story.title}
              </h2>
              <div className="prose prose-blue max-w-none">
                {story.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Tab.Panel>
  );
}
