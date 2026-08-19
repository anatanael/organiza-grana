import TransactionCard from "./TransactionCard";

export default function TransactionArea() {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded bg-white p-4 shadow">
      <h4 className="text-xl">Transações recentes</h4>

      <div>
        <TransactionCard
          title="Supermercado"
          date={new Date()}
          value={400}
          category={"Mercado"}
        />
      </div>
    </div>
  );
}
