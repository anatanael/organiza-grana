import Link from "next/link";

import MobileHeader from "@/app/(auth)/_components/mobile_header";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <MobileHeader />
      <h1>Bem vindo ao Organiza Grana</h1>

      <Link href="/cartoes/novo">
        <Button>Cartões</Button>
      </Link>
    </ProtectedRoute>
  );
}
