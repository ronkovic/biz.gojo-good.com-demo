'use client';

import { useState } from 'react';
import { Input } from '../common/Input';
import { PasswordInput } from './PasswordInput';
import { Button } from '../common/Button';

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string>('');

  // URLからメールアドレスを取得（実際の実装ではクエリパラメータやコンテキストから取得）
  const email = 'a.osawa@consrant.com';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('パスワードが一致しません');
      return;
    }

    setIsLoading(true);
    
    try {
      // ここにユーザー登録の処理を実装
      console.log('Registration with:', {
        ...formData,
        email
      });
      await new Promise(resolve => setTimeout(resolve, 1000)); // 仮の遅延
    } catch (error) {
      console.error('Registration failed:', error);
      setError('登録に失敗しました');
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
      <h1 className="text-2xl font-bold mb-4">ユーザー登録</h1>
      <p className="text-sm text-gray-600 mb-6">
        ようこそ、{email}さん。<br />
        ユーザー名とパスワードを設定して始めましょう。
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="ユーザー名"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="姓"
            required
          />
          <Input
            label={'\u00A0'} // スペースで揃える
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="名"
            required
          />
        </div>

        <div className="space-y-4">
          <PasswordInput
            label="パスワード"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="英数字・記号10文字以上"
            required
            minLength={10}
          />
          <p className="text-xs text-gray-500 mt-1">
            記号を含む英数字10文字以上
          </p>

          <PasswordInput
            label="パスワード（確認用）"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="英数字・記号10文字以上"
            required
            minLength={10}
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
          利用開始
        </Button>
      </form>
    </div>
  );
};
