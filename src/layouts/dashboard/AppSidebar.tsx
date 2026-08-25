"use client";

import {
  CirclePlus,
  CreditCard,
  LayoutDashboard,
  Receipt,
  Wallet,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { setOpenMobile, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="p-4">
        <span
          className="flex cursor-pointer justify-center px-2 text-lg font-bold"
          onClick={() => navigate("/dashboard")}
        >
          <img
            src="/assets/images/logo.png"
            alt="Organiza Grana Logo"
            width={160}
            height={160}
            className="h-auto"
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
                  <Link
                    to={item.url}
                    onClick={() => {
                      if (isMobile) setOpenMobile(false);
                    }}
                  >
                    <SidebarMenuButton className="hover:bg-primary/25 flex h-12.5 cursor-pointer gap-2 rounded text-xl">
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
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
