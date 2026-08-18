import { AppSidebar } from "@/app/(dashboard)/_components/app_sidebar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { SidebarProvider } from "@/components/ui/sidebar";

import HeaderDashboard from "./_components/header_dashboard";

export default function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 overflow-x-auto p-4 lg:p-0">
          <HeaderDashboard />

          {children}
        </main>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
