import { Calendar, CreditCard, EllipsisVertical } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/formatters";

interface CreditCardProps {
  name: string;
  description?: string;
  totalLimit: number;
  currentBalance: number;
  dueDay: number;
}

export function CreditCardOverview({
  name,
  description,
  totalLimit,
  currentBalance,
  dueDay,
}: CreditCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border-2 p-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 gap-3">
            <div className="bg-primary flex w-fit rounded-xl p-3">
              <CreditCard className="text-white" />
            </div>

            <div className="flex flex-col justify-between">
              <p className="text-base font-semibold">{name}</p>
              <p className="text-xs">{description}</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <EllipsisVertical />
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <p className="text-xs">Limite utilizado</p>
          <span className="text-xs">
            {formatCurrency(currentBalance)} / {formatCurrency(totalLimit)}
          </span>
        </div>
      </div>

      <Progress
        value={(currentBalance / totalLimit) * 100}
        className="h-2 rounded"
      />
      <hr className="border" />

      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 text-xs">
            <Calendar className="text-foreground" /> <span>Vencimento</span>
          </div>

          <span className="text-xs">Dia {dueDay}</span>
        </div>
      </div>
    </div>
  );
}
