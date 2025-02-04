'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  donationAmount: number;
  donorCount: number;
  url: string;
}

interface OrgProjectsProps {
  projects: Project[];
}

export function OrgProjects({ projects }: OrgProjectsProps) {
  return (
    <Tab.Panel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.url}
            className="block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {project.category}
                </span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400" />
              </div>
              <h3 className="text-[15px] font-medium text-gray-900 mb-4 line-clamp-2">
                {project.title}
              </h3>
              <div className="flex items-center justify-between text-[13px] text-gray-500">
                <div>
                  <div className="font-medium text-gray-900">
                    {project.donationAmount.toLocaleString()}円
                  </div>
                  <div>寄付総額</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-900">
                    {project.donorCount.toLocaleString()}件
                  </div>
                  <div>寄付件数</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Tab.Panel>
  );
}
