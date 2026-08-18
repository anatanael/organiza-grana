import InvoiceCard from "./InvoiceCard";

export default function Invoices() {
  return (
    <div className="flex flex-col gap-4">
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
  );
}
