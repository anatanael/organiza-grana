import { Outlet } from "react-router-dom";

import { AppSidebar } from "./dashboard/AppSidebar";
import HeaderDashboard from "./dashboard/HeaderDashboard";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { SidebarProvider } from "@/components/ui/sidebar";

export function DashboardLayout() {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 overflow-x-auto p-4 lg:p-0">
          <HeaderDashboard />

          <Outlet />
        </main>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
