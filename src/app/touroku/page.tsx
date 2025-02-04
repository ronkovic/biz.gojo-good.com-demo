import { AuthLayout } from '@/components/layout/AuthLayout';
import { RegistrationForm } from '@/components/auth/RegistrationForm';

export default function RegistrationPage() {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
}
