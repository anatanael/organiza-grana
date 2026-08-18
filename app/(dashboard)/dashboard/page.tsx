"use client";

import { ChevronRight, Landmark } from "lucide-react";
import Link from "next/link";

import Invoices from "./(invoices)/Invoices";
import BarCharts from "./barCharts";

export default function Dashboard() {
  return (
    <div className="flex max-w-full flex-col gap-6">
      <div className="flex w-full flex-col gap-4 rounded bg-white px-4 py-8 shadow">
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-lg">Saldo disponível</h4>
          <Landmark size={24} />
        </div>

        <div>
          <span className="text-4xl font-bold">R$ 12.450,00</span>
        </div>

        <Link className="flex flex-row gap-2" href="/dashboard">
          <span className="text-sm">Ver todas carteiras</span>
          <ChevronRight />
        </Link>
      </div>

      <div className="flex max-w-full flex-1 flex-col gap-8 overflow-hidden rounded bg-white p-4 shadow">
        <div className="flex">
          <div className="flex flex-1 flex-col p-1">
            <span className="text-base">Gasto mensal</span>
            <p className="text-xl">R$ 3.842,00</p>
            <span className="text-sm">7,8% vs mês anterior</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm">Média anual</span>
            <p className="text-lg">R$ 3.564,20</p>
          </div>
        </div>

        <div className="h-80 w-full overflow-x-auto outline-none **:outline-none">
          <BarCharts />
        </div>
      </div>

      <div className="flex flex-col rounded bg-white p-4 shadow">
        <h4 className="text-xl">Fatura Cartões</h4>

        <div>
          <Invoices />
        </div>
      </div>
    </div>
  );
}
