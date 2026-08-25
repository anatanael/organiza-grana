import { ShoppingCart } from "lucide-react";

import { formatCurrency } from "@/lib/formatters";

interface TransactionCardProps {
  title: string;
  date: Date;
  value: number;
  category: string;
}

export function TransactionCard({
  title,
  date,
  value,
  category,
}: TransactionCardProps) {
  function formatSmartDate(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;
    const currentYear = new Date().getFullYear();
    const dateYear = d.getFullYear();

    const day = d.getDate();
    let month = new Intl.DateTimeFormat("pt-BR", { month: "short" })
      .format(d)
      .replace(".", ""); // remove trailing dot that pt-BR locale adds (e.g. "out.")
    month = month.charAt(0).toUpperCase() + month.slice(1); // "Out"

    if (dateYear === currentYear) {
      return `${day} ${month}`; // "25 Out"
    }

    return `${day} ${month} de ${dateYear}`; // "25 Out de 2025"
  }

  return (
    <>
      <div className="flex flex-row gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dae7e6]">
          <ShoppingCart size={24} />
        </div>

        <div>
          <p className="text-base font-semibold">{title}</p>

          <div className="flex flex-row items-center gap-2 text-xs">
            {formatSmartDate(date)}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-end gap-1">
        <span className={`text-base ${value > 0 ? "text-red-500" : ""}`}>
          {value > 0 ? `- ${formatCurrency(value)}` : formatCurrency(value)}
        </span>
        <p className="w-fit rounded bg-[#eee] px-2 py-1 align-bottom text-xs">
          {category}
        </p>
      </div>
    </>
  );
}
