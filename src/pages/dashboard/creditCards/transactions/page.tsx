import { useState } from "react";

import { Button } from "@base-ui/react";
import { CreditCard, ShoppingBag } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const transactionMonths = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export function CreditCardTransactionsPage() {
  const [monthSelect, setMonthSelect] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div className="my-4 flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">Movimentação Cartão</h1>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <Select>
            <SelectTrigger className="h-auto! min-w-64 rounded-lg border-gray-200 px-4 py-2 shadow-sm focus:ring-0">
              <SelectValue>
                <div className="flex flex-row gap-3">
                  <div className="bg-primary rounded-lg p-3">
                    <CreditCard size={24} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base">Nubank</span>
                    <span className="text-xs">Pessoal 8824</span>
                  </div>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Cartões</SelectLabel>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <SelectItem key={index} value={`item-${index}`}>
                      nubank
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-row gap-4">
          <div className="bg-primary flex min-w-50 flex-1 flex-col items-center justify-center gap-1 rounded-lg p-2 text-white">
            <p className="text self-start">Total da fatura</p>
            <span className="text-2xl font-bold">R$ 8.540,73</span>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 rounded-lg border-2 bg-white p-2">
            <div className="flex h-fit rounded-full bg-[#dae7e6] p-1">
              <ShoppingBag size={32} />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold">14</span>
              <span>Compras</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex flex-row gap-2">
            {transactionMonths.map((item, index) => (
              <CarouselItem key={index} className="basis-1/6 lg:basis-1/3">
                <Button
                  className={`cursor-pointer rounded-lg bg-[#dbe8e7] px-4 py-1 ${item === monthSelect && "bg-primary text-white"}`}
                  onClick={() => setMonthSelect(item)}
                >
                  {item}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-4">
          <span>Hoje</span>
          <hr className="flex-1" />
        </div>

        <div className="flex w-full flex-row justify-between rounded-lg border-2 bg-white p-2">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="rounded-full bg-[#dae7e6] p-2">
              <ShoppingBag size={32} />
            </div>

            <div>
              <p>Televisão</p>
              <div className="flex flex-row gap-2">
                <CreditCard size={12} />
                <span className="text-xs">Nubank</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <p>R$ 400,00</p>

            <span className="rounded-full bg-[#dae7e6] px-1 py-0.5 text-xs">
              Parcela 1/12
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
