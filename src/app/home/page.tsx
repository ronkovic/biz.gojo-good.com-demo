import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { OverallReport } from '@/components/home/OverallReport';

export default function HomePage() {
  return (
    <DashboardLayout>
      <OverallReport />
    </DashboardLayout>
  );
}