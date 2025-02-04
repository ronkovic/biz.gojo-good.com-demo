import { AuthLayout } from '@/components/layout/AuthLayout';
import { TwoFactorForm } from '@/components/auth/TwoFactorForm';

export default function TwoFactorAuthPage() {
  return (
    <AuthLayout>
      <TwoFactorForm />
    </AuthLayout>
  );
}
