'use client';

import { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

export const TwoFactorForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // ここに2要素認証の検証処理を実装
      console.log('Verification attempt with code:', verificationCode);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 仮の遅延
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      // ここに認証コードの再送信処理を実装
      console.log('Resending verification code');
      await new Promise(resolve => setTimeout(resolve, 1000)); // 仮の遅延
    } catch (error) {
      console.error('Failed to resend code:', error);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-8">2要素認証</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-700">認証コード</label>
            <button
              type="button"
              onClick={handleResendCode}
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              再送信
            </button>
          </div>
          <Input
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="000000"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength={6}
            required
            className="text-center tracking-widest text-lg"
          />
          <p className="text-sm text-gray-500">
            認証アプリに表示されている6桁の数字を入力
          </p>
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
        >
          認証
        </Button>
      </form>
    </div>
  );
};
