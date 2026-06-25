import { forwardRef } from "react";

import { Input } from "@/components/ui/input";

type CurrencyInputProps = React.ComponentProps<typeof Input> & {
  error?: string;
};

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div>
        <div className="relative">
          <div className="bg-input text-foreground justify-ce absolute top-0 left-0 flex h-full w-12 items-center rounded-l p-4">
            R$
          </div>

          <Input
            ref={ref}
            {...props}
            className={`pl-14 ${className ?? ""}`}
            type="number"
            step="0.01"
          />
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

CurrencyInput.displayName = "CurrencyInput";
