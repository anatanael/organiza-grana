import PurchaseCard from "./PurchaseCard";

export default function PurchasesArea() {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded bg-white p-4 shadow">
      <h4 className="text-xl">Compras Parceladas</h4>

      <div>
        <PurchaseCard
          title="Televisão"
          card={"Nubank"}
          value={400}
          installmentNumber={4}
          totalInstallments={12}
        />
      </div>
    </div>
  );
}
