"use client";

import {
  CirclePlus,
  CreditCard,
  LayoutDashboard,
  Receipt,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Cartões", url: "/cartoes", icon: CreditCard },
  { title: "Faturas", url: "/transacoes", icon: Receipt },
  { title: "Carteira", url: "/configuracoes", icon: Wallet },
];

export function AppSidebar() {
  const router = useRouter();
  const { setOpenMobile, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="p-4">
        <span
          className="flex cursor-pointer justify-center px-2 text-lg font-bold"
          onClick={() => router.push("/dashboard")}
        >
          <Image
            src="/assets/images/logo.png"
            alt="Organiza Grana Logo"
            width={160}
            height={160}
            className="h-auto"
            priority
          />
        </span>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Menu</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-primary/25 flex h-12.5 gap-2 rounded text-xl"
                  >
                    <Link
                      href={item.url}
                      onClick={() => {
                        if (isMobile) setOpenMobile(false);
                      }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Button variant="default" className="w-full cursor-pointer">
          <CirclePlus /> <span className="text-base">Lançar Transação</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
