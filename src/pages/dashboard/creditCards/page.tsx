import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { CreditCardOverview } from "./_components/CreditCardOverview";

import { Button } from "@/components/ui/button";

export function CreditCardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">Meus Cartões</h1>

        <p>Gerencie os dados do seus cartões</p>
      </div>

      <Link to="/cartoes/novo">
        <Button className="text-md w-full font-bold">
          <Plus className="mr-2" /> Cadastrar Cartão
        </Button>
      </Link>

      <div className="flex flex-col gap-6">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <CreditCardOverview
              name={"Nubank"}
              description={"Joao 8824"}
              totalLimit={5000}
              currentBalance={2500}
              key={index}
              dueDay={12}
            />
          ))}
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border-3 border-dashed p-6">
        <Link to="/cartoes/novo">
          <Button className="h-12 w-12 rounded-full bg-[#d3e4e3]">
            <Plus size={24} className="text-primary" />
          </Button>
        </Link>

        <p>Adicionar novo cartão</p>
      </div>
    </div>
  );
}
