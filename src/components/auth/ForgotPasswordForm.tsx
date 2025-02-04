'use client';

import { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import Link from 'next/link';

export const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // ここにパスワード再発行メール送信処理を実装
      console.log('Password reset email requested for:', email);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 仮の遅延
    } catch (error) {
      console.error('Password reset request failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-8">パスワード再発行</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Input
            label="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sample@consrant.co.jp"
            required
          />
          <p className="text-sm text-gray-500">
            パスワード再発行URLを送付するメールアドレスを入力してください。
          </p>
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
        >
          パスワード再発行メールを送信
        </Button>

        <div className="text-center">
          <Link
            href="/login"
            className="text-sm text-blue-500 hover:text-blue-600 inline-flex items-center space-x-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>ログインへ戻る</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
