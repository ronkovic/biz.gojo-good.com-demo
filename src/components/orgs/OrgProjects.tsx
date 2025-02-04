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
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{projects.length}件</h3>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              className="block hover:bg-gray-50"
            >
              <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="relative h-24 w-32 flex-shrink-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-900/75 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium text-gray-900 truncate pr-4">
                      {project.title}
                    </h4>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">寄付総額</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {project.donationAmount.toLocaleString()}円
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">寄付件数</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {project.donorCount.toLocaleString()}件
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
}
