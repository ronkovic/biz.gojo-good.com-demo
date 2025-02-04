'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

interface Post {
  id: string;
  date: string;
  content: string;
  imageUrl: string;
  likeCount: number;
  relatedProject?: {
    id: string;
    title: string;
    imageUrl: string;
    url: string;
  };
}

interface OrgPostsProps {
  posts: Post[];
}

export function OrgPosts({ posts }: OrgPostsProps) {
  return (
    <Tab.Panel>
      <div className="relative">
        {/* タイムライン */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />

        <div className="space-y-8">
          {posts.map((post) => {
            const date = new Date(post.date);
            const year = format(date, 'yyyy年', { locale: ja });
            const monthDay = format(date, 'MM月dd日', { locale: ja });
            const time = format(date, 'HH:mm:ss', { locale: ja });

            return (
              <div key={post.id} className="relative pl-16">
                {/* 日付マーカー */}
                <div className="absolute left-0 flex flex-col items-end">
                  <div className="text-sm text-gray-500">{year}</div>
                  <div className="text-sm font-medium text-gray-900">{monthDay}</div>
                  <div className="text-xs text-gray-500">{time}</div>
                  <div className="absolute left-8 top-3 w-2 h-2 rounded-full bg-blue-600" />
                </div>

                {/* ポストコンテンツ */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 whitespace-pre-wrap">
                      {post.content}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                        <HeartIcon className="h-5 w-5 mr-1" />
                        <span className="text-sm">いいね {post.likeCount.toLocaleString()}</span>
                      </button>
                      <Link
                        href="#"
                        className="text-sm text-blue-600 hover:text-blue-500"
                      >
                        寄付実績へ
                        <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 ml-1" />
                      </Link>
                    </div>

                    {/* 関連プロジェクト */}
                    {post.relatedProject && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <h4 className="text-sm text-gray-500 mb-2">対象のプロジェクト</h4>
                        <Link
                          href={post.relatedProject.url}
                          className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50"
                        >
                          <div className="relative h-16 w-24 flex-shrink-0">
                            <Image
                              src={post.relatedProject.imageUrl}
                              alt={post.relatedProject.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 font-medium line-clamp-2">
                              {post.relatedProject.title}
                            </p>
                          </div>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Tab.Panel>
  );
}
