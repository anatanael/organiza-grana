"use client";

import { PipetteIcon } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import { useForm } from "react-hook-form";

import MobileHeader from "@/app/(dashboard)/_components/mobile_header";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { CurrencyInput } from "@/components/common/CurrencyInput";
import { DayOfMonthSelect } from "@/components/common/DayOfMonthSelect";
import { FormField } from "@/components/common/FormField";
import CreditCardIcon from "@/components/icons/CreditCardIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type FormData = {
  nameOfCard: string;
  description: string;
  limit: number;
  dayClosingCard: number;
  dayDueCard: number;
  colorCard: string;
};

const colorsCard = [
  "#00C5A2",
  "#7D2170",
  "#C26881",
  "#229796",
  "#BF356C",
  "#000000",
];

export default function Cartoes() {
  const { register, control, watch, setValue } = useForm<FormData>({
    defaultValues: {
      colorCard: "#00C5A2",
    },
  });

  const colorCard = watch("colorCard");

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-150 px-0">
          <MobileHeader title="Adicionar Cartão" />

          <div className="mb-8 flex justify-center">
            <CreditCardIcon
              name={watch("nameOfCard")}
              color={colorCard}
              limit={watch("limit")}
            />
          </div>

          <form className="flex w-full flex-col gap-6 rounded-[8px] bg-white px-2 py-4 shadow">
            <FormField label="Nome do cartão" name="nameOfCard">
              <Input
                placeholder="Ex. Nubank / Inter / C6 Bank / Caixa"
                {...register("nameOfCard")}
              />
            </FormField>

            <FormField label="Descrição" name="description">
              <Input placeholder="Uso pessoal" {...register("description")} />
            </FormField>

            <FormField label="Limite total" name="limit">
              <CurrencyInput
                placeholder=" 5.000,00"
                {...register("limit")}
                type="number"
                min={0}
                step={0.01}
              />
            </FormField>

            <div className="flex gap-4">
              <FormField label="Dia Fechamento" name="dayClosingCard">
                <DayOfMonthSelect control={control} name="dayClosingCard" />
              </FormField>

              <FormField label="Dia Vencimento" name="dayDueCard">
                <DayOfMonthSelect control={control} name="dayDueCard" />
              </FormField>
            </div>

            <FormField label="Cor do cartão" name="dayClosingCard">
              <div className="flex gap-2">
                {colorsCard.map((color) => {
                  const isSelected = colorCard === color;

                  return (
                    <Button
                      key={color}
                      type="button"
                      onClick={() => setValue("colorCard", color)}
                      className={`h-10 w-10 cursor-pointer rounded-full border-2 transition-all ${
                        isSelected
                          ? "scale-110 border-white"
                          : "border-transparent"
                      }`}
                      style={{
                        backgroundColor: color,
                        boxShadow: isSelected
                          ? `0 0 0 2px ${color}`
                          : undefined,
                      }}
                    />
                  );
                })}

                <Popover>
                  <PopoverTrigger asChild>
                    <button className="border-gra flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border">
                      <PipetteIcon />
                    </button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-2">
                    <HexColorPicker
                      color={colorCard}
                      onChange={(value) => {
                        setValue("colorCard", value);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </FormField>
          </form>

          <Button className="mt-4 w-full cursor-pointer">
            Cadastrar Cartão
          </Button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
