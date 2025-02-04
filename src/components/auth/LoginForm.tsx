'use client';

import { useState } from 'react';
import { Input } from '../common/Input';
import { PasswordInput } from './PasswordInput';
import { Checkbox } from '../common/Checkbox';
import { Button } from '../common/Button';
import Link from 'next/link';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // ここにログイン処理を実装
      console.log('Login attempt with:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 仮の遅延
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-8">ログイン</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="メールアドレス"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="sample@consrant.co.jp"
          required
        />
        
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="flex items-center justify-between">
          <Checkbox
            label="ログインを記憶"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <Link
            href="/login/forgot_password"
            className="text-sm text-blue-500 hover:text-blue-600"
          >
            パスワードを忘れたら
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
        >
          ログイン
        </Button>
      </form>
    </div>
  );
};
