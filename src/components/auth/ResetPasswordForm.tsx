'use client';

import { useState } from 'react';
import { PasswordInput } from './PasswordInput';
import { Button } from '../common/Button';
import Link from 'next/link';

interface PasswordFormData {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<PasswordFormData>({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('パスワードが一致しません');
      return;
    }

    setIsLoading(true);
    
    try {
      // ここにパスワード再設定の処理を実装
      console.log('Password reset with:', formData.password);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 仮の遅延
    } catch (error) {
      console.error('Password reset failed:', error);
      setError('パスワードの再設定に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-8">パスワード再設定</h1>
      <p className="text-sm text-gray-600 mb-6">
        新しいパスワードを設定してください。
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <PasswordInput
            label="新しいパスワード"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="英数字8文字以上"
            required
            minLength={8}
          />
          <PasswordInput
            label="新しいパスワード（確認用）"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="英数字8文字以上"
            required
            minLength={8}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
        >
          この内容で再設定
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
