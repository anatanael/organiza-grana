"use client";

import { ChevronRight, Landmark, TrendingDown } from "lucide-react";
import Link from "next/link";

import InvoicesArea from "./(invoices)/InvoicesArea";
import PurchasesArea from "./(purchases)/PurchasesArea";
import TransactionArea from "./(transactions)/TransactionArea";
import BarCharts from "./barCharts";

export default function Dashboard() {
  return (
    <div className="flex max-w-full flex-col gap-6 lg:max-w-360 lg:gap-8 lg:px-8 lg:py-4">
      <h2 className="hidden text-4xl font-bold lg:block">Resumo Financeiro</h2>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex w-full flex-col gap-4 rounded bg-white px-4 py-8 shadow lg:w-fit lg:justify-between lg:p-8">
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

        <div className="flex max-w-full flex-1 flex-col gap-8 overflow-hidden rounded bg-white p-4 shadow lg:flex-row">
          <div className="flex lg:flex-col">
            <div className="flex flex-1 flex-col p-1">
              <span className="text-base">Gasto mensal</span>
              <p className="text-2xl">R$ 3.842,00</p>
              <div className="flex flex-row items-center gap-2">
                <TrendingDown />
                <span className="text-sm">7,8% vs mês anterior</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">Média anual</span>
              <p className="text-base">R$ 3.564,20</p>
            </div>
          </div>

          <div className="h-80 w-full overflow-x-auto outline-none **:outline-none lg:h-60">
            <BarCharts />
          </div>
        </div>
      </div>
      <InvoicesArea />

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-18">
        <PurchasesArea />

        <TransactionArea />
      </div>
    </div>
  );
}
