import { CreditCard, ShoppingBag } from "lucide-react";

import { formatCurrency } from "@/lib/formatters";

interface PurchaseCardProps {
  title: string;
  card: string;
  value: number;
  installmentNumber: number;
  totalInstallments: number;
}

export function PurchaseCard({
  title,
  card,
  value,
  installmentNumber,
  totalInstallments,
}: PurchaseCardProps) {
  return (
    <>
      <div className="flex flex-row gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dae7e6]">
          <ShoppingBag size={24} />
        </div>

        <div>
          <p className="text-base">{title}</p>

          <div className="flex flex-row items-center gap-2 text-xs">
            <CreditCard size={12} /> {card}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="text-base">{formatCurrency(value)}</span>
        <p className="rounded bg-[#eee] px-2 py-1 text-xs">
          Parcela {installmentNumber}/{totalInstallments}
        </p>
      </div>
    </>
  );
}
