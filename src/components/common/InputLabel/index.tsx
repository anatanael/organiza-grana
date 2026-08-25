import React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900">
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className={cn(
            "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900",
            className,
          )}
        />

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
