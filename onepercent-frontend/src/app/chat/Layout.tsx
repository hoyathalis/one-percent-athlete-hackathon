import DashboardLayout from '@/components/layout/DashboardLayout';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}