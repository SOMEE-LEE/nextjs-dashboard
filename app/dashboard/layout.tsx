// /app/dashboard/layout.tsx
// 페이지 맨 왼쪽에 들어가는 공통 ui(사이드 네비게이션) -> 렌더링되지 않음
import SideNav from '@/app/ui/dashboard/sidenav';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
