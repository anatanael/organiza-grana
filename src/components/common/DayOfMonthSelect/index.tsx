import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DayOfMonthSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  maxDay?: number;
  className?: string;
}

export function DayOfMonthSelect<T extends FieldValues>({
  control,
  name,
  placeholder = "Dia",
  maxDay = 31,
  className = "h-12",
}: DayOfMonthSelectProps<T>) {
  const days = Array.from({ length: maxDay }, (_, i) => i + 1);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={`${field.value ?? ""}`}>
          <SelectTrigger className={className}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {days.map((day) => (
                <SelectItem key={day} value={`${day}`}>
                  {day}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
