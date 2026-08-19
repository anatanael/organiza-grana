import InvoiceCard from "./InvoiceCard";

export default function InvoicesArea() {
  return (
    <div className="flex flex-col gap-2 rounded bg-white p-4 shadow">
      <h4 className="text-xl">Fatura Cartões</h4>

      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <InvoiceCard
          title="Próxima fatura"
          value={2950.25}
          totalCards={4}
          totalPurchased={15}
        />
        <InvoiceCard
          title="Fatura atual"
          value={4896.86}
          totalCards={6}
          totalPurchased={25}
        />
        <InvoiceCard
          title="Fatura anterior"
          value={3585.7}
          totalCards={2}
          totalPurchased={8}
        />
      </div>
    </div>
  );
}
