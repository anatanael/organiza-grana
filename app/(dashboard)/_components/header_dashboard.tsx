"use client";

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function HeaderDashboard() {
  return (
    <div className="mb-4 flex items-center justify-between bg-white p-2 shadow lg:mb-0">
      <div className="flex gap-1">
        <SidebarTrigger className="lg:hidden" />
        <span className="text-primary text-2xl font-bold">Organiza Grana</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
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
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator /> */}
          <DropdownMenuItem
            variant="destructive"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            <LogOutIcon />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
