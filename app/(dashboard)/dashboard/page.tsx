import MobileHeader from "@/app/(auth)/_components/mobile_header";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <MobileHeader />
      <h1>Bem vindo ao Organiza Grana</h1>
    </ProtectedRoute>
  );
}
