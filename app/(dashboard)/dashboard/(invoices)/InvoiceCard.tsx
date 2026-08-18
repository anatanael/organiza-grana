import { CreditCard, Receipt, ShoppingCart } from "lucide-react";

interface InvoiceCardProps {
  title: string;
  value: number;
  totalCards: number;
  totalPurchased: number;
}

export default function InvoiceCard({
  title,
  value,
  totalCards,
  totalPurchased,
}: InvoiceCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border p-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <div className="bg-primary/25 flex h-12 w-12 items-center justify-center rounded-full">
            <Receipt />
          </div>

          <div>
            <span className="text-sm">{title}</span>
            <p className="text-2xl">{value}</p>
          </div>
        </div>

        <div className="bg-black-500 flex h-fit w-fit rounded-full bg-[#ddd] px-2 py-1">
          <span>Em aberto</span>
        </div>
      </div>

      <hr />

      <div className="flex flex-row gap-1">
        <div className="flex flex-row items-center gap-2">
          <span className="flex h-fit w-fit rounded bg-[#ddd] p-1">
            <CreditCard size={16} />
          </span>
          <span className="text-xs">{totalCards} cartões</span>
        </div>

        <div className="flex flex-row items-center gap-2">
          <span className="flex h-fit w-fit rounded bg-[#ddd] p-1">
            <ShoppingCart size={16} />
          </span>
          <span className="text-xs">{totalPurchased} compras</span>
        </div>
      </div>
    </div>
  );
}
