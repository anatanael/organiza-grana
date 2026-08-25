import { ChevronRight, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

export function AvailableBalanceCard() {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-lg">Saldo disponível</h4>
        <Landmark size={24} />
      </div>

      <div>
        <span className="text-4xl font-bold">R$ 12.450,00</span>
      </div>

      <Link className="flex flex-row gap-2" to="/dashboard">
        <span className="text-sm">Ver todas carteiras</span>
        <ChevronRight />
      </Link>
    </>
  );
}
