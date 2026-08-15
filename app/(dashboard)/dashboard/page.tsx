import Image from "next/image";

import { AppSidebar } from "@/app/(dashboard)/_components/app_sidebar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-4 lg:p-0">
          <div className="flex items-center justify-between bg-white p-2 shadow">
            <div className="flex gap-1">
              <SidebarTrigger className="lg:hidden" />
              <span className="text-primary text-2xl font-bold">
                Organiza Grana
              </span>
            </div>

            <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
              <Image
                src="https://api.dicebear.com/9.x/avataaars/png?seed=Felix"
                alt="Organiza Grana Logo"
                width={40}
                height={40}
                className="h-auto rounded-full"
                priority
              />
            </div>
          </div>

          {children}
        </main>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
