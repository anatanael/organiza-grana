"use client";

import { AvailableBalanceCard } from "./components/AvailableBalanceCard";
import { BarChartCard } from "./components/BarChartCard";
import { InvoiceCard } from "./components/InvoiceCard";
import { PurchaseCard } from "./components/PurchaseCard";
import { TransactionCard } from "./components/TransactionCard";

const baseClassContainer = "flex flex-col rounded-lg bg-white border-2";

export default function Dashboard() {
  return (
    <div className="flex max-w-full flex-col gap-6 lg:max-w-360 lg:gap-8 lg:px-8 lg:py-4">
      <h2 className="hidden text-4xl font-bold lg:block">Resumo Financeiro</h2>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div
          className={`${baseClassContainer} w-full gap-4 px-4 py-8 lg:w-fit lg:justify-between lg:p-8`}
        >
          <AvailableBalanceCard />
        </div>

        <div
          className={`${baseClassContainer} max-w-full flex-1 gap-8 overflow-hidden p-4 lg:flex-row`}
        >
          <BarChartCard />
        </div>
      </div>

      <div className={`${baseClassContainer} flex-col gap-2 p-4`}>
        <h4 className="text-xl">Fatura Cartões</h4>

        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <InvoiceCard
            title="Próxima fatura"
            value={2950.25}
            totalCards={4}
            totalPurchased={15}
          />
          <InvoiceCard
            title="Fatura atual"
            value={4896.86}
            totalCards={6}
            totalPurchased={25}
          />
          <InvoiceCard
            title="Fatura anterior"
            value={3585.7}
            totalCards={2}
            totalPurchased={8}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-18">
        <div className={`${baseClassContainer} flex-1 gap-2 p-4`}>
          <h4 className="text-xl">Compras Parceladas</h4>

          <div className="flex flex-1 justify-between p-4">
            <PurchaseCard
              title="Televisão"
              card={"Nubank"}
              value={400}
              installmentNumber={4}
              totalInstallments={12}
            />
          </div>
        </div>

        <div className={`${baseClassContainer} flex-1 gap-2 p-4`}>
          <h4 className="text-xl">Transações recentes</h4>

          <div className="flex flex-1 justify-between p-4">
            <TransactionCard
              title="Supermercado"
              date={new Date()}
              value={400}
              category={"Mercado"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
