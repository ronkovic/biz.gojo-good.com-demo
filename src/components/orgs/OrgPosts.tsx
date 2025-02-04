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
        <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-blue-100" />

        <div className="space-y-12">
          {posts.map((post) => {
            const date = new Date(post.date);
            const year = format(date, 'yyyy', { locale: ja });
            const monthDay = format(date, 'MM月dd日', { locale: ja });
            const time = format(date, 'HH:mm:ss', { locale: ja });

            return (
              <div key={post.id} className="relative pl-24">
                {/* 日付マーカー */}
                <div className="absolute left-0 top-0">
                  <div className="flex flex-col items-end">
                    <div className="text-[13px] font-normal text-blue-600">{year}年</div>
                    <div className="text-[13px] font-medium text-gray-900">{monthDay}</div>
                    <div className="text-[11px] font-normal text-gray-500">{time}</div>
                  </div>
                  <div className="absolute left-[4.5rem] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 -translate-x-1/2" />
                </div>

                {/* ポストコンテンツ */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={post.imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[15px] leading-relaxed text-gray-700 whitespace-pre-wrap">
                      {post.content}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <button className="group">
                          <HeartIcon className="h-5 w-5 text-gray-400 group-hover:text-red-500" />
                        </button>
                        <span className="text-[13px] text-gray-500">いいね {post.likeCount.toLocaleString()}</span>
                      </div>
                      <Link
                        href="#"
                        className="text-[13px] text-blue-600 hover:text-blue-500 flex items-center"
                      >
                        寄付実績へ
                        <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>

                    {/* 関連プロジェクト */}
                    {post.relatedProject && (
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <h4 className="text-[13px] text-gray-500 mb-3">対象のプロジェクト</h4>
                        <Link
                          href={post.relatedProject.url}
                          className="flex items-start space-x-3 rounded hover:bg-gray-50"
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
                            <p className="text-[13px] text-gray-700 line-clamp-2">
                              {post.relatedProject.title}
                            </p>
                            <p className="mt-1 text-[11px] text-gray-500">
                              {/* 応募終了まで残り○○日のみ */}
                            </p>
                          </div>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
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
