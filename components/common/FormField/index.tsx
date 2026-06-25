import { type FieldValues, type Path } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps<T extends FieldValues> {
  error?: string;
  name: Path<T>;
  label: string;
  className?: string;
  children: React.ReactNode;
}

export function FormField<T extends FieldValues>({
  error,
  name,
  label,
  className,
  children,
}: FormFieldProps<T>) {
  return (
    <div className={cn("w-full", className)}>
      <Label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {label}
      </Label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
